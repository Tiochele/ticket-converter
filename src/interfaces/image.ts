import { fetchImage } from "./../utils/getImage";
import { FabricObject } from "./fabricObject";

export interface Image extends FabricObject {
  angle: number;
  flipX: boolean;
  flipY: boolean;
  opacity: number;
  shadow: null;
  visible: boolean;
  backgroundColor: string;
  fillRule: string;
  paintFirst: string;
  globalCompositeOperation: string;
  skewX: number;
  skewY: number;
  cropX: number;
  cropY: number;
  src: string;
  crossOrigin: string | null;
  filters: [];

  //saveImage: (url: string) => void;
}
