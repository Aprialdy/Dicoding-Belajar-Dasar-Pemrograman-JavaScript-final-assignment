function factorial(n) {
    if (n < 0) {
        return "Input harus angka positif.";
      }
      if (n === 0 || n === 1) {
        return 1;
      }
  
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
}

// Jangan hapus kode di bawah ini!
export default factorial;
