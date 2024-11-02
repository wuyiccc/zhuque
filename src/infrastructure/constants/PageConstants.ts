import StrConstants from "@/infrastructure/constants/StrConstants";

export default class PageConstants {

  public static readonly PAGE_INDEX = 'pages/index/index';


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
