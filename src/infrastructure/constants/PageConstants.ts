export default class PageConstants {

  public static readonly PAGE_HOME = 'pages/home/index';

  public static readonly PAGE_CATEGORY = 'pages/category/index';

  public static readonly PAGE_CART = 'pages/cart/index';

  public static readonly PAGE_MINE = 'pages/mine/index';

  public static readonly PAGE_DETAIL: string = 'pages/detail/index';


  /**
   * 获取所有的页面信息
   */
  public static getPageList(): string[] {

    return Object.values(PageConstants);
  }


}
