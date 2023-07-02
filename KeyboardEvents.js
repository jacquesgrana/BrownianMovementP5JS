function keyTyped() {
  if (key === 'H' || key === 'h') {
    showHelp = !showHelp;
    showSettings = showHelp ? false : showSettings;
    console.log(`Show Help : ${showHelp}`);
    console.log(`Show Settings : ${showSettings}`);
  }
  
  if (key === 'S' || key === 's') {
    showSettings = !showSettings;
    showHelp = showSettings ? false : showHelp;
    console.log(`Show Help : ${showHelp}`);
    console.log(`Show Settings : ${showSettings}`);
  }
}
