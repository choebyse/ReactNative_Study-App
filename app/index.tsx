import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TimerApp = () => {
  const [seconds, setSeconds] = useState(0); // 時間記録
  const [isRunning, setIsRunning] = useState(false); // タイマ状態

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  // 時, 分, 秒 変換
  const formatTime = (totalSeconds: number) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  // タイマリセット
  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(seconds)}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={isRunning ? "停止" : "開始"}
          onPress={() => setIsRunning(!isRunning)}
        />
        <Button title="リセット" onPress={resetTimer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default TimerApp;
