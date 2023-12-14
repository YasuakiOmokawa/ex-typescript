class EmptyArrayError extends Error {}

try {
  getsAverage([1, 2, 3]);
  getsAverage([]); // ここで例外が発生する
} catch (err) {
  if (err instanceof EmptyArrayError) {
    console.log("EmptyArrayErrorをキャッチしました");
    console.log(err.message);
  } else {
    throw err;
  }
}

function getsAverage(scoreList: number[]) {
  if (scoreList.length === 0) {
    throw new EmptyArrayError("配列が空です");
  }
  const sum = scoreList.reduce((total, score) => total + score);
  return sum / scoreList.length;
}
