import cloudinary from "cloudinary";
import { CLOUD_NAME, API_KEY, API_SECRET } from "@/config";
import type { ImageResource } from "../../types/content";
import { Suspense } from "react";

cloudinary.v2.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

// Overload signatures
interface AsyncFolderPropsSingle {
  folder: string;
  children: (resources: ImageResource[]) => React.ReactNode;
  fallback: React.ReactNode | null;
}

interface AsyncFolderPropsMultiple {
  folder: string[];
  children: (resources: Record<string, ImageResource[]>) => React.ReactNode;
  fallback: React.ReactNode | null;
}

type AsyncFolderProps = AsyncFolderPropsSingle | AsyncFolderPropsMultiple;

const FolderFetcherSingle = async ({
  folder,
  children,
}: {
  folder: string;
  children: (resources: ImageResource[]) => React.ReactNode;
}) => {
  const { resources } = await cloudinary.v2.api.resources_by_asset_folder(
    folder,
    { max_results: 500 }
  );
  return children(resources);
};

const FolderFetcherMultiple = async ({
  folder,
  children,
}: {
  folder: string[];
  children: (resources: Record<string, ImageResource[]>) => React.ReactNode;
}) => {
  const results = await Promise.all(
    folder.map((f) =>
      cloudinary.v2.api.resources_by_asset_folder(f, {
        max_results: 500,
      })
    )
  );

  const resources: Record<string, ImageResource[]> = {};
  folder.forEach((folderName, index) => {
    resources[folderName] = results[index].resources;
  });

  return children(resources);
};

export function AsyncFolder(props: AsyncFolderPropsSingle): React.ReactElement;
export function AsyncFolder(props: AsyncFolderPropsMultiple): React.ReactElement;
export function AsyncFolder({
  folder,
  fallback,
  children,
}: AsyncFolderProps) {
  if (Array.isArray(folder)) {
    return (
      <Suspense fallback={fallback}>
        <FolderFetcherMultiple folder={folder}>
          {children as (resources: Record<string, ImageResource[]>) => React.ReactNode}
        </FolderFetcherMultiple>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={fallback}>
      <FolderFetcherSingle folder={folder}>
        {children as (resources: ImageResource[]) => React.ReactNode}
      </FolderFetcherSingle>
    </Suspense>
  );
}
