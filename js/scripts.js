function Account () {
}

var account = new Account();


Account.prototype.modifyAcc = function(changeAmount) {
  if(!this.bal)
  {
    this.bal = parseFloat(changeAmount);
  }else{
  this.bal += changeAmount;
  }
}

Account.prototype.modifyName = function(changeName) {
  this.name = changeName;
}

function attachContactListeners() {
  $("#buttons").on("click", ".deposit", function() {
    var dep = $("input#deposit").val();
    var wit = $("input#withdraw").val();
    dep -= wit;
    account.modifyAcc(dep);
    console.log(account);
  });
};

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    console.log(account);
    account.modifyName($("input#new-name").val());
    account.modifyAcc(parseFloat($("input#new-deposit").val()));
    console.log(account);
  })
})
