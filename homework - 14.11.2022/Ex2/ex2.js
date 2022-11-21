const current_tr = document.getElementsByTagName("tr");

function Add_User() {
  $.ajax({
    url: "https://randomuser.me/api/",
    success: (result) => {
      try {
        if (current_tr.length <= 10) {
          let age;
          if (result.results[0].dob.age > 18) {
            age = "yes";
          } else {
            age = "no";
          }
          console.log(result);
          $("#Users_Table").append(`
          class="table table-success table-striped"
                    <tr>
                    <td><img class="rounded"src="${result.results[0].picture.thumbnail}">
                    <td>${result.results[0].name.first}</td>
                        <td>${result.results[0].name.last}</td>
                        <td>${result.results[0].gender}</td>
                        <td>${age}</td>
                        <td>${
                          result.results[0].location.country +
                          ", " +
                          result.results[0].location.city
                        }</td>
                        </tr>`);
        } else {
          throw Error("cannot add more users");
        }
      } catch (err) {
        console.error("cannot add more users");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "cannot add more users!",
        });
      }
    },
  });
}

function Remove_User() {
  try {
    if (current_tr.length > 1) {
      current_tr[current_tr.length - 1].remove();
    } else {
      throw Error("no more users to remove");
    }
  } catch (err) {
    console.error("no more row to delete");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "no more row to delete!",
    });
  }
}
