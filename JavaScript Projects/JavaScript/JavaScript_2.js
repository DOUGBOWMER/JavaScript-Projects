function validateForm() {
    let x = document.forms["myform"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }