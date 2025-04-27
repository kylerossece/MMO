export const createArrList = (item: string[], key: string) => {
    return item
            .map((item : string) => item + "." + key)
            .filter((value : string, index : number, self : string[]) => self.indexOf(value) === index)
            .sort(function (a, b) {
                if (a < b) {
                return -1;
                }
                if (a > b) {
                return 1;
                }
                return 0;
      });
}