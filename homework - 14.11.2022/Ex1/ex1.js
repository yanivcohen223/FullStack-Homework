const user_info = {
  first_name: " ",
  last_name: " ",
  over_18: false,
  address: " ",
  gender: null,
};

function send_info() {
  try {
    if (
      $("#first_name").val() == "" ||
      $("#last_name").val() == "" ||
      $("#over18")[0].checked == false ||
      $("#address").val() == "" ||
      $("#Select_Gender").val() == null
    ) {
      throw Error("error");
    } else {
      user_info.first_name = $("#first_name").val();
      user_info.last_name = $("#last_name").val();
      user_info.over_18 = $("#over18")[0].checked;
      user_info.address = $("#address").val();
      user_info.gender = $("#Select_Gender").val();
    }
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!"
    });
  }
}

function random_users() {
  const RandomUsers = [
    {
      first_name: "Bernard",
      last_name: "Cohen",
      over_18: true,
      address: "kibbutz sufa",
      gender: "male",
    },
    {
      first_name: "george ",
      last_name: "clooney",
      over_18: true,
      address: "USA",
      gender: "male",
    },
    {
      first_name: "itay",
      last_name: "hauptman",
      over_18: true,
      address: "Tel aviv",
      gender: "male",
    },
    {
      first_name: "Elton",
      last_name: "John",
      over_18: true,
      address: "England",
      gender: "Other",
    },
    {
      first_name: "Donald",
      last_name: "Trump",
      over_18: true,
      address: "USA",
      gender: "Other",
    },
  ];
  num = Math.floor(Math.random() * 5);
  RandomUsers[num];
  $("#first_name").val(`${RandomUsers[num].first_name}`);
  $("#last_name").val(`${RandomUsers[num].last_name}`);
  $("#over18")[0].checked = RandomUsers[num].over_18;
  $("#address").val(`${RandomUsers[num].address}`);
  $("#Select_Gender").val(`${RandomUsers[num].gender}`);
}

function HHR_user_random() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      let user = JSON.parse(xhr.responseText);
      $("#first_name").val(user.results[0].name.first);
      $("#last_name").val(user.results[0].name.last);
      $("#over18")[0].checked = user.results[0].dob.age > 18;
      $("#address").val(
        user.results[0].location.country + ", " + user.results[0].location.city
      );
      $("#Select_Gender").val(user.results[0].gender);
    }
  };

  xhr.open("GET", "https://randomuser.me/api/", true);
  xhr.send(null);
}

function JqueryAjax_userRandom() {
  $.ajax({
    url: "https://randomuser.me/api/",
    success: (result) => {
      $("#first_name").val(result.results[0].name.first);
      $("#last_name").val(result.results[0].name.last);
      $("#over18")[0].checked = result.results[0].dob.age > 18;
      $("#address").val(
        result.results[0].location.country +
          ", " +
          result.results[0].location.city
      );
      $("#Select_Gender").val(result.results[0].gender);
    },
  });
}

function FetchAjax_userRandom() {
  fetch("https://randomuser.me/api/")
    .then((result) => result.json())
    .then((result) => {
      $("#first_name").val(result.results[0].name.first);
      $("#last_name").val(result.results[0].name.last);
      $("#over18")[0].checked = result.results[0].dob.age > 18;
      $("#address").val(
        result.results[0].location.country +
          ", " +
          result.results[0].location.city
      );
      $("#Select_Gender").val(result.results[0].gender);
      console.log(result.results[0].name.first);
    });
}


