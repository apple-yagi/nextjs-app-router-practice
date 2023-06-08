export const isUrl = (str: string) => {
  // URLの正規表現パターン
  var pattern = new RegExp(
    "^(https?:\\/\\/)" + // http:// または https://
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // ドメイン名
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // IPアドレス
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // ポートとパス
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // クエリストリング
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );

  return pattern.test(str);
};
