
export function RomanToArabic(s: string): number {
    let res: number = 0;
    const symbols: any = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    s.split("")
      .reverse()
      .forEach((char) => {
        let val: number = parseInt(symbols[char]);
        if (res > 4 * val) {
          res -= val;
        } else {
          res += val;
        }
      });
    return res;
  }