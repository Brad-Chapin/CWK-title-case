function titleCase(title, minorWords) {
    let parts = title.toLowerCase().split(" "), newTitle = "";
    if (minorWords == undefined) {
      minorWords = [];
    } else {
      minorWords = minorWords.toLowerCase().split(" ");
    }
    newTitle += (parts[0].substr(0,1).toUpperCase() + parts[0].substr(1));
    for (let i = 1; i < parts.length; i++) {
      if (minorWords.indexOf(parts[i]) != -1) {
        newTitle += (" " + parts[i]);
      } else {
        newTitle += (" " + parts[i].substr(0,1).toUpperCase() + parts[i].substr(1));
      }
    }
    return newTitle;
}
