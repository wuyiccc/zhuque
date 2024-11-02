import StrConstants from "@/infrastructure/constants/StrConstants";

export default class PageConstants {

  public static readonly PAGE_CROSS_PLATFORM = 'pages/cross-platform/index';

  public static readonly PAGE_INDEX = 'pages/index/index';

  public static readonly PAGE_ZUSTAND = 'pages/zustand/index';


  /**
   * 获取所有的页面信息
   */
  public static getPageList(): string[] {

    return Object.values(PageConstants);
  }

  public static getNavigateUrl(url : string): string {

    return StrConstants.SLASH + url;
  }

}
