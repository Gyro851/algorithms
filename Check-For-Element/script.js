var storeHTML;
var storeJS;
var show = true;
var showOutput = true;
var autoRun = false;
var attempt = 0;

setTimeout(loadQuestion, 100);

// DOM Setup
document.getElementById('title').innerHTML = displayTitle;
document.getElementById('btn-answer').addEventListener('click', loadAnswer);
document.getElementById('btn-auto').addEventListener('click', buttonAuto);
document.getElementById('btn-output').addEventListener('click', buttonOutput);

// click btn-auto at start
document.getElementById('btn-auto').click();
document.getElementById('run_button').style.color = '#999';

run_button.addEventListener('click', function () {
  attempt++;
  storeHTML = editor.getValue();
  storeJS = editor2.getValue();
  storeMix =
    'Attempt: ' +
    attempt +
    '<script>' +
    //change expectedOutput to desired answer
    expectedOutput +
    '</script>' +
    '<script>' +
    storeJS +
    '</script>' +
    storeHTML;
  // console.log(storeHTML);
  // console.log(storeJS);
  var jsDoc2 = document.getElementById('iframe2').contentWindow.document;

  jsDoc2.open();
  jsDoc2.write(storeMix);
  // console.log(storeMix);
  jsDoc2.close();
});

//============== ACE EDITOR ==============
// ACE 1
function update() {
  var idoc = document.getElementById('iframe').contentWindow.document;

  idoc.open();
  idoc.write(editor.getValue());
  idoc.close();
}

function setupEditor() {
  window.editor = ace.edit('editor');
  editor.setTheme('ace/theme/monokai');
  editor.getSession().setMode('ace/mode/javascript');
  editor.getSession().setTabSize(2);
  editor.getSession().setUseWrapMode(true);
  editor.setValue(
    // ===========================
    // === SET x = result HERE ===
    // ===========================
    `
<!DOCTYPE html><html><body>
<h2 id="idOutput" style='color: #797F8C'>Output...</h2>
<h2 id="idDone" style='color: crimson' >Waiting ...</h2>

  <h3 id="log1"></h3>
  <h3 id="log2"></h3>
  <h3 id="log3"></h3>
  <h3 id="log4"></h3>
  <h3 id="log5"></h3>
  <h3 id="log6"></h3>
  <h3 id="log7"></h3>
  <h3 id="log8"></h3>
  <h3 id="log9"></h3>
  
<style>
  * {
  font-family: 'Courier New', Courier, monospace;
  font-size: 24px;
  }
</style>

<script>
  var log1;
  var log2;
  var log3;
  var log4;
  var log5;
  var log6;
  var log7;
  var log8;
  var log9;

  if (typeof log1 !== 'undefined') {
    document.getElementById("log1").innerHTML = "log1 = " + log1;
  }
  if (typeof log2 !== 'undefined') {
    document.getElementById("log2").innerHTML = "log2 = " + log2;
  }
  if (typeof log3 !== 'undefined') {
    document.getElementById("log3").innerHTML = "log3 = " + log3;
  }
  if (typeof log4 !== 'undefined') {
    document.getElementById("log4").innerHTML = "log4 = " + log4;
  }
  if (typeof log5 !== 'undefined') {
    document.getElementById("log5").innerHTML = "log5 = " + log5;
  }
  if (typeof log6 !== 'undefined') {
    document.getElementById("log6").innerHTML = "log6 = " + log6;
  }
  if (typeof log7 !== 'undefined') {
    document.getElementById("log7").innerHTML = "log7 = " + log7;
  }
  if (typeof log8 !== 'undefined') {
    document.getElementById("log8").innerHTML = "log8 = " + log8;
  }
  if (typeof log9 !== 'undefined') {
    document.getElementById("log9").innerHTML = "log9 = " + log9;
  }

  document.getElementById("idOutput").innerHTML = x;  
  
  // custom match for testing ojects/array
  // by turning x[object] to x[string] using x.join()

if (typeof(x) === "object") {

  if (x.join() === Expecting) {
    document.body.style.backgroundColor = "#FFFF66";
    document.getElementById("idOutput").style.color = "black";
    document.getElementById("idDone").style.color = "green"; 
    document.getElementById("idDone").innerHTML = '&#128504; Done!!!'; 
  } else {
    document.body.style.backgroundColor = "#282828"; 
    document.body.style.color = "darkturquoise";//
    document.body.style.color = "#797F8C"; // shade of white
  }
  
} else {

  if (x === Expecting) {
    document.body.style.backgroundColor = "#FFFF66";
    document.body.style.backgroundColor = "#FFFFCC";
    document.getElementById("idOutput").style.color = "black";
    document.getElementById("idDone").style.color = "green"; 
    document.getElementById("idDone").innerHTML = '&#128504; Done!!!'; 
  } else {
    document.body.style.backgroundColor = "#282828"; 
    document.body.style.color = "darkturquoise";//
    document.body.style.color = "#797F8C"; // shade of white
  }
}

</script></body></html>
    `,
    1
  ); //1 = moves cursor to end

  editor.getSession().on('change', function () {
    update();
  });

  // editor.focus();

  editor.setOptions({
    fontSize: '15px',
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

//==================================================
// ACE 2

function update2() {
  if (autoRun) {
    storeHTML = editor.getValue();
    storeJS = editor2.getValue();
    storeMix =
      '<script>' +
      //change expectedOutput to desired answer
      expectedOutput +
      '</script>' +
      '<script>' +
      storeJS +
      '</script>' +
      storeHTML;

    var idoc2 = document.getElementById('iframe2').contentWindow.document;

    idoc2.open();
    // idoc2.write(editor2.getValue());  // original (need 'RUN' button)
    idoc2.write(storeMix);
    // console.log(storeMix);          // updates live
    idoc2.close();
  }
}

function setupEditor2() {
  loadQuestion();

  window.editor2 = ace.edit('editor2');
  editor2.setTheme('ace/theme/monokai');
  editor2.getSession().setMode('ace/mode/javascript');
  editor2.getSession().setTabSize(2);
  editor2.getSession().setUseWrapMode(true);
  editor2.setValue(displayCode, 1); //1 = moves cursor to end
  // editor2.insert("any string you want to add on");

  editor2.getSession().on('change', function () {
    update2();
  });

  editor2.focus();

  editor2.setOptions({
    fontSize: '15px',
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
  });

  editor2.setShowPrintMargin(false);
  editor2.setBehavioursEnabled(false);
}

//==================================================
// ACE 3

function setupEditor3() {
  window.editor3 = ace.edit('editor3');
  editor3.setTheme('ace/theme/monokai');
  // editor3.getSession().setMode("ace/mode/javascript");
  editor3.getSession().setTabSize(0);
  editor3.getSession().setUseWrapMode(true);

  document.getElementById('editor3').style.fontSize = '14px';
  document.getElementById('editor3').style.color = 'cyan';
  editor3.setValue(
    // === SET x = result HERE ===
    `
displayAnswer not needed in setupEditor3() for now
`,
    1
  ); //1 = moves cursor to end

  editor3.getSession().on('change', function () {
    update();
  });

  // editor3.focus();

  editor3.setOptions({
    fontSize: '15px',
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
  });

  editor3.setShowPrintMargin(false);
  editor3.setBehavioursEnabled(false);
  editor3.setReadOnly(true);
}

//==================================================
// Load Questions and Answers

function loadQuestion() {
  document.getElementById('myTextarea').style.color = 'green';
  document.getElementById('myTextarea').value = displayQuestion;
}

function loadAnswer() {
  if (show) {
    document.getElementById('btn-answer').innerText = 'Hide Answer';
    // document.getElementById("myTextarea").style.color = "blue";
    document.getElementById('myTextarea').value = displayAnswer;
    // .value = displayQuestion + displayAnswer;

    // hide myTextarea and to only show ACE answer
    document.getElementById('myTextarea').style.display = 'none';
    document.getElementById('editor3').style.width = '33.7%';

    // document.getElementById('editor3').style.fontSize = '15px';
    document.getElementById('editor3').style.color = '#DCDCDC';
    // // editor3.getSession().setUseWrapMode(true);

    document.getElementById('btn-output').innerText = 'Expand Output';
    document.getElementById('iframe2').style.width = '20%';

    window.editor3 = ace.edit('editor3');
    editor3.setTheme('ace/theme/monokai');
    editor3.getSession().setMode('ace/mode/javascript');
    editor3.getSession().setTabSize(0);
    editor3.getSession().setUseWrapMode(true);

    editor3.setValue(displayAnswer);
    editor3.insert(displayAnswer);

    show = false;
  } else {
    document.getElementById('btn-answer').innerText = 'Show Answer';
    document.getElementById('myTextarea').style.color = 'green';
    document.getElementById('myTextarea').value = displayQuestion;

    // show myTextarea and to only hide ACE answer
    document.getElementById('myTextarea').style.display = '';
    document.getElementById('editor3').style.width = '0%';
    showOutput = false;

    document.getElementById('editor3').style.fontSize = '14px';
    document.getElementById('editor3').style.color = 'cyan';
    editor3.getSession().setMode();
    editor3.setValue(displayQuestion);
    editor3.insert(displayQuestion);

    show = true;
  }
}

function buttonAuto() {
  if (!autoRun) {
    document.getElementById('btn-auto').innerText = 'Auto: off';
    document.getElementById('run_button').setAttribute('disabled', 'false');
    document.getElementById('run_button').style.cursor = 'not-allowed';
    document.getElementById('run_button').style.color = '#999';
    autoRun = true;
  } else {
    document.getElementById('btn-auto').innerText = 'Auto: on';
    document.getElementById('run_button').removeAttribute('disabled');
    document.getElementById('run_button').style.cursor = 'pointer';
    document.getElementById('run_button').style.color = '#DCDCDC';
    autoRun = false;
  }
}

function buttonOutput() {
  if (showOutput) {
    document.getElementById('btn-output').innerText = 'Normal Output';
    document.getElementById('myTextarea').style.display = 'none';
    document.getElementById('editor3').style.width = '0%';
    document.getElementById('iframe2').style.width = '53%';

    showOutput = false;
  } else {
    document.getElementById('btn-output').innerText = 'Expand Output';
    document.getElementById('myTextarea').style.display = '';
    document.getElementById('iframe2').style.width = '20%';

    showOutput = true;
  }
}

//==================================================
// Run Functions
setupEditor();
update();
setupEditor2();
update2();
setupEditor3();
