function etudiant(nom,branche,S1,S2,S3,S4,S5,S6)
{
    var nom;
    var S1;
    var S2;
    var S3;
    var S4;
    var S5;
    var S6;
}

var ajoutParts=['accueil','S1','S2','S3','S4','S5','S6','fin'];
var SMIS1=['INFORMATIQUE1','ANALYSE1','ALGEBRE1','ALGEBRE2','MECANIQUE1','THERMODYNAMIQUE1','LT1'];
var SMIS2=['INFORMATIQUE2','ANALYSE2','ANALYSE3','ALGEBRE3','ELECTRICITE1','OPTIQUE1','LT2'];
var SMIS3=['TECHNOWEB','OS1','PROBABILITE1','ELECTRONIQUENUM','PROGRAMMATION1','ALGORITHMIQUE2'];
var SMIS4=['PROGRAMMATION2','OS2','ARCHIORDI','ELECTRICITE2','STRDONNES','ANANUM'];
var SMIS5=['BASEDONNEES','COMPILATION','RECHOPERAT','POO','RESAUX','UML'];
var SMIS6=['WEB2','POO2','PYTHON','SECURITEINFO','PROJET','PROJET'];



var cptAjout=0;

var etd=new etudiant;
etd.S1=new Array(7);
etd.S2=new Array(7);
etd.S3=new Array(6);
etd.S4=new Array(6);
etd.S5=new Array(6);
etd.S6=new Array(6);

function verifierModules(choix)
{
    if(choix<=2)
    {
        for(i=1;i<=7;i++)
        {
            if(document.getElementById('M'+i+'S'+choix).value=="")
            {
                alert('donner la note du module '+i);
                return false;
            }
            else
            if(isNaN(document.getElementById('M'+i+'S'+choix).value))
            {
                alert('La note du module '+i+' doit être numérique');
                return false;
            }
            else
            if(parseFloat(document.getElementById('M'+i+'S'+choix).value)<0 || parseFloat(document.getElementById('M'+i+'S'+choix).value)>20)
            {
                alert('La note du module '+i+' doit être ncmprise entre 0 et 20');
                return false;
            }
        }

    }else
    for(i=1;i<=6;i++)
    {
        if(document.getElementById('M'+i+'S'+choix).value=="")
        {
            alert('donner la note du module '+i);
            return false;
        }
        else
        if(isNaN(document.getElementById('M'+i+'S'+choix).value))
        {
            alert('La note du module '+i+' doit être numérique');
            return false;
        }else
        if(parseFloat(document.getElementById('M'+i+'S'+choix).value)<0 || parseFloat(document.getElementById('M'+i+'S'+choix).value)>20)
        {
            alert('La note du module '+i+' doit être ncmprise entre 0 et 20');
            return false;
        }
    }

    

    return true;
}


function suivant()
{
switch(cptAjout)
{
        case 0:
            if((nom=document.getElementById('nom').value)!="")
            {
                etd.nom=nom;
                    if(branche=document.getElementById('branche').selectedIndex>0)
                    {
                        for(i=1;i<=7;i++)
                        {
                            document.getElementById('S1'+'M'+i).innerText=SMIS1[i-1]+":";
                            document.getElementById('S2'+'M'+i).innerText=SMIS2[i-1]+":";
                        }                 
                        for(i=1;i<=6;i++)
                        {
                            document.getElementById('S3'+'M'+i).innerText=SMIS3[i-1]+":";
                            document.getElementById('S4'+'M'+i).innerText=SMIS4[i-1]+":";
                            document.getElementById('S5'+'M'+i).innerText=SMIS5[i-1]+":";
                            document.getElementById('S6'+'M'+i).innerText=SMIS6[i-1]+":";
                        }

                        etd.branche=document.getElementById('branche')[document.getElementById('branche').selectedIndex].value;
                        document.getElementById(ajoutParts[cptAjout]).style.display='none';
                        document.getElementById(ajoutParts[++cptAjout]).style.display='inline';
                        document.getElementById('prev').disabled=0;
                    }
                    else{
                        alert("SVP donner la branche");
                        break;
                    }
                
            }else
            {
                alert("SVP donner le nom");
            }
                break;
        case 1:
            if(verifierModules(1))
            {
                
                for(i=1;i<=7;i++)
                {
                    etd.S1[i-1]=parseFloat(document.getElementById('M'+i+'S1').value);
                }
                document.getElementById(ajoutParts[cptAjout]).style.display='none';
                document.getElementById(ajoutParts[++cptAjout]).style.display='inline';
            }else          
             break;
        case 2:
            if(verifierModules(2))
            {       
                for(i=1;i<=7;i++)
                {
                    etd.S2[i-1]=parseFloat(document.getElementById('M'+i+'S2').value);
                }
                document.getElementById(ajoutParts[cptAjout]).style.display='none';
                document.getElementById(ajoutParts[++cptAjout]).style.display='inline';
            }else          
             break;
        break;
        case 3:
            if(verifierModules(3))
            {
                
                for(i=1;i<=6;i++)
                {
                    etd.S3[i-1]=parseFloat(document.getElementById('M'+i+'S3').value);
                }
                document.getElementById(ajoutParts[cptAjout]).style.display='none';
                document.getElementById(ajoutParts[++cptAjout]).style.display='inline';
            }else          
             break;
        break;
        case 4:
            if(verifierModules(4))
            {
               
                for(i=1;i<=6;i++)
                {
                    etd.S4[i-1]=parseFloat(document.getElementById('M'+i+'S4').value);
                }
                document.getElementById(ajoutParts[cptAjout]).style.display='none';
                document.getElementById(ajoutParts[++cptAjout]).style.display='inline';
            }else          
             break;
        break;
        case 5:
            if(verifierModules(5))
            {
                for(i=1;i<=6;i++)
                {
                    etd.S5[i-1]=parseFloat(document.getElementById('M'+i+'S5').value);
                }
                document.getElementById(ajoutParts[cptAjout]).style.display='none';
                document.getElementById(ajoutParts[++cptAjout]).style.display='inline';
                
            }else          
             break;         
        case 6:
            if(verifierModules(6))
            {
              
                for(i=1;i<=6;i++)
                {
                    etd.S6[i-1]=parseFloat(document.getElementById('M'+i+'S6').value);
                }
                document.getElementById('nomFin').innerText+=etd.nom;
                envoyer();
                document.getElementById(ajoutParts[cptAjout]).style.display='none';
                document.getElementById(ajoutParts[++cptAjout]).style.display='inline';
                document.getElementById('next').disabled=1;  
                document.getElementById("prev").disabled=1;
                document.getElementById('autre').style.display='inline';
            }else          
             break;
    }
}




function precedant()
{
    switch(cptAjout)
    {
        case 0:
            document.getElementById(ajoutParts[cptAjout]).style.display='none';
            document.getElementById(ajoutParts[--cptAjout]).style.display='inline';
            break;
        case 1:
            document.getElementById(ajoutParts[cptAjout]).style.display='none';
            document.getElementById(ajoutParts[--cptAjout]).style.display='inline';
            document.getElementById('prev').disabled=1;
        break;
        case 2:
            document.getElementById(ajoutParts[cptAjout]).style.display='none';
            document.getElementById(ajoutParts[--cptAjout]).style.display='inline';
        break;
        case 3:
            document.getElementById(ajoutParts[cptAjout]).style.display='none';
            document.getElementById(ajoutParts[--cptAjout]).style.display='inline';
        break;
        case 4:
            document.getElementById(ajoutParts[cptAjout]).style.display='none';
            document.getElementById(ajoutParts[--cptAjout]).style.display='inline';
        break;
        case 5:
            document.getElementById(ajoutParts[cptAjout]).style.display='none';
            document.getElementById(ajoutParts[--cptAjout]).style.display='inline';
        break;
        case 6:
            document.getElementById(ajoutParts[cptAjout]).style.display='none';
            document.getElementById(ajoutParts[--cptAjout]).style.display='inline'; 
            break;
        case 7:
                document.getElementById("autre").style.display='none';
                document.getElementById("next").disabled=0;
                document.getElementById(ajoutParts[cptAjout]).style.display='none';
                document.getElementById(ajoutParts[--cptAjout]).style.display='inline'; 
                break;            
    }
}


function moyen(tab)
{
    sum=0;
    for(i=0;i<tab.length;i++)
    {
        sum+=tab[i];
    }
    
    return sum/tab.length;

}


var idcpt=0;
function envoyer()
{
    var visTab=document.getElementById('visTabBody');
    idcpt++;
    visTab.innerHTML+="<tr class='visTabRow' id=etd"+idcpt+"><td id=nom"+idcpt+"></td> <td id=branche"+idcpt+"></td> <td id=S1"+idcpt+"></td> <td id=S2"+idcpt+"></td> <td id=S3"+idcpt+"></td> <td id=S4"+idcpt+"></td> <td id=S5"+idcpt+"></td> <td id=S6"+idcpt+"></td> </tr>"

    var nom=document.getElementById('nom'+idcpt);
    var branche=document.getElementById('branche'+idcpt);
    var S1=document.getElementById('S1'+idcpt);
    var S2=document.getElementById('S2'+idcpt);
    var S3=document.getElementById('S3'+idcpt);
    var S4=document.getElementById('S4'+idcpt);
    var S5=document.getElementById('S5'+idcpt);
    var S6=document.getElementById('S6'+idcpt);

    nom.innerText=etd.nom;
    branche.innerText=etd.branche;
 
   

    S1.innerHTML+="<span class=moyen>"+moyen(etd.S1)+"</span>";
    S1.innerHTML+="<button id=detailsbtnS1"+idcpt+" class='detailsbtn' onclick=afficherDetails('S1details"+idcpt+"','detailsbtnS1"+idcpt+"'); onmouseover=document.getElementById('msgS1"+idcpt+"').style.display='inline'; onmouseout=document.getElementById('msgS1"+idcpt+"').style.display='none'; >+</button><span style=display:none; id=msgS1"+idcpt+">Afficher les détails</span><div style='display:none;' class='details' id=S1details"+idcpt+"><ul>";
   
    S1details=document.getElementById("S1details"+idcpt);
    for(i=0;i<7;i++)
        {
            S1details.innerHTML+="<li> "+ SMIS1[i] +": "+ etd.S1[i] +"</li>";
        }
        S1.innerHTML+="</lu></div>";
  

    // S2:    refaire la même chose pour S2 ... S6 puis il faut faire un test pour vérifier si les données sont valide ou non avant de stocker les données dans vistab ce test sera au début de cette fonction
    // n'oublier pas d'écrire la fonction moyen
    S2.innerHTML+="<span class=moyen>"+moyen(etd.S2)+"</span>";
    S2.innerHTML+="<button id=detailsbtnS2"+idcpt+" class='detailsbtn' onclick=afficherDetails('S2details"+idcpt+"','detailsbtnS2"+idcpt+"'); onmouseover=document.getElementById('msgS2"+idcpt+"').style.display='inline'; onmouseout=document.getElementById('msgS2"+idcpt+"').style.display='none';>+</button><span style=display:none; id=msgS2"+idcpt+">Afficher les détails</span><div style='display:none;' class='details' id=S2details"+idcpt+"><ul>";
   
    S2details=document.getElementById('S2details'+idcpt);
    for(i=0;i<7;i++)
        {
            S2details.innerHTML+="<li> "+ SMIS2[i] +": "+ etd.S2[i] +"</li>";
        }
        S2.innerHTML+="</lu></div>";
    //S3
    S3.innerHTML+="<span class=moyen>"+moyen(etd.S3)+"</span>";
    S3.innerHTML+="<button id=detailsbtnS3"+idcpt+" class='detailsbtn' onclick=afficherDetails('S3details"+idcpt+"','detailsbtnS3"+idcpt+"'); onmouseover=document.getElementById('msgS3"+idcpt+"').style.display='inline'; onmouseout=document.getElementById('msgS3"+idcpt+"').style.display='none';>+</button><span style=display:none; id=msgS3"+idcpt+">Afficher les détails</span><div style='display:none;' class='details' id=S3details"+idcpt+"><ul>";
   
    S3details=document.getElementById("S3details"+idcpt);
    for(i=0;i<6;i++)
        {
            S3details.innerHTML+="<li> "+ SMIS3[i] +": "+ etd.S3[i] +"</li>";
        }
        S3.innerHTML+="</lu></div>";
    //S4    
        S4.innerHTML+="<span class=moyen>"+moyen(etd.S4)+"</span>";
        S4.innerHTML+="<button id=detailsbtnS4"+idcpt+" class='detailsbtn' onclick=afficherDetails('S4details"+idcpt+"','detailsbtnS4"+idcpt+"'); onmouseover=document.getElementById('msgS4"+idcpt+"').style.display='inline'; onmouseout=document.getElementById('msgS4"+idcpt+"').style.display='none';>+</button><span style=display:none; id=msgS4"+idcpt+">Afficher les détails</span><div style='display:none;' class='details' id=S4details"+idcpt+"><ul>";
       
        S4details=document.getElementById("S4details"+idcpt);
        for(i=0;i<6;i++)
            {
                S4details.innerHTML+="<li> "+ SMIS4[i] +": "+ etd.S4[i] +"</li>";
            }
            S4.innerHTML+="</lu></div>";

    //S5
    S5.innerHTML+="<span class=moyen>"+moyen(etd.S5)+"</span>";
    S5.innerHTML+="<button id=detailsbtnS5"+idcpt+" class='detailsbtn' onclick=afficherDetails('S5details"+idcpt+"','detailsbtnS5"+idcpt+"'); onmouseover=document.getElementById('msgS5"+idcpt+"').style.display='inline'; onmouseout=document.getElementById('msgS5"+idcpt+"').style.display='none';>+</button><span style=display:none; id=msgS5"+idcpt+">Afficher les détails</span><div style='display:none;' class='details' id=S5details"+idcpt+"><ul>";
   
    S5details=document.getElementById("S5details"+idcpt);
    for(i=0;i<6;i++)
        {
            S5details.innerHTML+="<li> "+ SMIS5[i] +": "+ etd.S5[i] +"</li>";
        }
        S5.innerHTML+="</lu></div>";

    //S6
    S6.innerHTML+="<span class=moyen>"+moyen(etd.S6)+"</span>";
    S6.innerHTML+="<button id=detailsbtnS6"+idcpt+" class='detailsbtn' onclick=afficherDetails('S6details"+idcpt+"','detailsbtnS6"+idcpt+"'); onmouseover=document.getElementById('msgS6"+idcpt+"').style.display='inline'; onmouseout=document.getElementById('msgS6"+idcpt+"').style.display='none';>+</button><span style=display:none; id=msgS6"+idcpt+">Afficher les détails</span><div style='display:none;' class='details' id=S6details"+idcpt+"><ul>";
   
    S6details=document.getElementById("S6details"+idcpt);
    for(i=0;i<6;i++)
        {
            S6details.innerHTML+="<li> "+ SMIS6[i] +": "+ etd.S6[i] +"</li>";
        }
        S6.innerHTML+="</lu></div>";

    visTab.innerHTML+="</tr>";
    



}




function reinitialiser()
{
    document.getElementById('autre').style.display='none';
    document.getElementById('next').disabled=0;
    document.getElementById('nomFin').innerText="";
    document.getElementById(ajoutParts[cptAjout]).style.display='none';
    cptAjout=0;
    document.getElementById(ajoutParts[cptAjout]).style.display='inline';
    document.getElementById('branche').selectedIndex=0;
    document.getElementById('nom').value="";
    document.getElementById('prev').disabled=1;
    for(semestre=1;semestre<=6;semestre++)
    {
        for(i=1;i<=7;i++)
        {
            if(semestre>2)
                if(i==7)
                 continue;
    
                document.getElementById('M'+i+'S'+semestre).value="";
        }
    }
       
}

function afficherDetails(divId,btnId)
{
    if(document.getElementById(btnId).innerText=="+")
    {
        document.getElementById(divId).style.display="inline";
        document.getElementById(btnId).innerText="-";
    }
    else
    {
        document.getElementById(divId).style.display="none";
        document.getElementById(btnId).innerText="+";
    }

}