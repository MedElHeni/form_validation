function valider ( )
			{
			    if ( document.formulaire.name.value == "" )
			    {
			        
			        document.formulaire.name.style.backgroundColor = "red";
			        alert ( "Veuillez entrer votre nom !" );
					return false;
			    }

			    if ( document.formulaire.firstname.value == "" )
			    {
			        document.formulaire.firstname.style.backgroundColor = "red";
			        alert ( "Veuillez entrer votre prénom !" );
					return false;
			    }

			    if ( document.formulaire.email.value == "" )
			    {
			        document.formulaire.email.style.backgroundColor = "red";
			        alert ( "Veuillez entrer votre courriel !" );
					return false;
			    }

			    var n = (document.formulaire.email.value).indexOf("@");
			    if (n==-1)
				{
				    alert("Couriel non valid ! ")
					return false;
				}
			    pass = document.formulaire.password.value
			    if ( pass.length < 8 )
			    {
			        document.formulaire.password.style.backgroundColor = "red";
			        alert ( "Le mot de passe doit contenir au minimum 8 caractères ! " );
					return false;
			    }
			    var numbers = /[0-9]/g;
			    if(document.formulaire.password.value.match(numbers))
			    {
			        true ;
			    }
			    else
			    {
			    	document.formulaire.password.style.backgroundColor = "red";
			        alert ( "Le mot de passe doit contenir au moin un chiffre  !" );
					return false;
			    }


			    var char = /[A-Z]/g;
			    if(document.formulaire.password.value.match(char))
			    {
			        true ;
			    }
			    else
			    {
			    	document.formulaire.password.style.backgroundColor = "red";
			        alert ( "Le mot de passe doit contenir au moin une lettre en MAJUSCULE  !" );
					return false;
			    }


			    if ( document.formulaire.password.value !==  document.formulaire.repeatepassword.value )
			    {
			        document.formulaire.password.style.backgroundColor = "red";
			        document.formulaire.repeatepassword.style.backgroundColor = "red";
			        alert ( "Les mots de passe ne sont pas identique !  " );
					return false;
			    }

			    if ( document.formulaire.phone.value == "" )
			    {
			        document.formulaire.phone.style.backgroundColor = "red";
			        alert ( "Veuillez entrer votre numéro de téléphone !" );
					return false;
			    }
			    if (/^[0-9]+$/.test(document.formulaire.phone.value))
				{
				    true;
				}
				else
				{
				    document.formulaire.phone.style.backgroundColor = "red";
				    alert("numéro de téléphone ! non valid ! ");
					return false;
				}
			    if ( document.formulaire.adresse.value == "" )
			    {
			        document.formulaire.adresse.style.backgroundColor = "red";
			        alert ( "Veuillez entrer le commentaire !" );
					return false;
			    } 

			}
