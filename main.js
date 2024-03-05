function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('/model.json',modelLoaded);
  }
  
  function modelLoaded() {
      console.log('Modelo cargado!');
  }
  
  function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
  }
  
