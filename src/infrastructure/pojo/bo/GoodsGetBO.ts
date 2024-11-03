export default class GoodsGetBO {

  public type: number;


  public page: number;


  constructor(type: number, page: number) {
    this.type = type;
    this.page = page;
  }
}
