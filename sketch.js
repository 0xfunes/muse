function setup() {

    createCanvas(400, 400);
  
    setupMuse();
  
  }
  
  function draw() {
  
    background(200);
  
    // EEG chart
    beginShape();
    strokeWeight(1);
    noFill();
    stroke(255, 255, 255);
  
    for (let i = 1; i <= (eegSpectrum.length/2); i++) {
     let x = map(i, 0, eegSpectrum.length/2, 0, width);
     let y = map(eegSpectrum[i], 0, 50, height, 0);
     vertex(x, y); //<-- draw a line graph
    }
    endShape();
  
    noStroke();
    fill(0,0,0);
    textSize(10);
    text('BATTERY: ' + Math.floor(batteryLevel), width-80, 10);
    
    textSize(12);
    text('DELTA: ' + eeg.delta.toFixed(0), 10, 30);
    text('THETA: ' + eeg.theta.toFixed(0), 10, 45);
    text('ALPHA: ' + eeg.alpha.toFixed(0), 10, 60);
    text('BETA:  ' + eeg.beta.toFixed(0),  10, 75);
    text('GAMMA: ' + eeg.gamma.toFixed(0), 10, 90);
  
    if (ppg.heartbeat) {
      text('HEART bpm: ' + ppg.bpm + ' •', 10, 120);
    } else {
      text('HEART bpm: ' + ppg.bpm, 10, 120);
    }
  
   
    
    text('ACCEL X: ' + accel.x.toFixed(2), 10, 150);
    text('ACCEL Y: ' + accel.y.toFixed(2), 10, 165);
    text('ACCEL Z: ' + accel.z.toFixed(2), 10, 180);
  
    text('GYRO X: ' + gyro.x.toFixed(2), 10, 210);
    text('GYRO Y: ' + gyro.y.toFixed(2), 10, 225);
    text('GYRO Z: ' + gyro.z.toFixed(2), 10, 240);
  
  }
  
  