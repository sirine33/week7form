console.log(document.forms["MonFormul"])
function validateForm()
{
    var nom = document.forms["MonFormul"]["Nom"];
    var prenom = document.forms[ "MonFormul"]["Prénom"]               
    var email = document.forms["MonFormul"]["Email"];    
    var mdp = document.forms["MonFormul"]["Mot de passe"]; 
    if (verifpn(nom.value))
    {
        document.getElementById('errorNom').innerHTML="Veuillez entrez un nom valide";  
        nom.focus();
    } else{
        document.getElementById('errorNom').innerHTML="";
    }
    if (verifpn(prenom.value))
    {
        document.getElementById('errorPrenom').innerHTML="Veuillez entrez un prénom valide"; 
        document.getElementById('Prenom').style.borderColor="red"


        prenom.focus();
    } else{
        document.getElementById('errorPrenom').innerHTML="" ;
        document.getElementById('Prenom').style.borderColor="black"

    }
  function verifpn(x){
      let n=0
      var letters =/^[A-Za-z]+$/;
      if (x.length==0||!x.match(letters)){
          return true
      } else {
          return false 
      }
  }
  function verife(){
      if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.'com')*$/.test(email.value))
      {
          return (true)
      } else {
          return false 
      }
  }
  if (email.value==""||!verife(email.value)) 
  {
    document.getElementById('errorEmail').innerHTML="Veuillez entrez un email valide"

  } else {
    document.getElementById('errorEmail').innerHTML="" ;
  }
  function verifmdp(){
      if (/^[a-zA-Z0-9]+$/.test(mdp.value))
      {
          return (true)
      }else{
          return false 
      }
  }
  if (mdp.value==""||!verifmdp(mdp.value))
  {
    document.getElementById('errorMdp').innerHTML="Veuillez entrez un mot de passe valide"
  } else {
    document.getElementById('errorMdp').innerHTML="" ;
  }
}