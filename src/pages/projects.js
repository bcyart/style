import React from 'react'
import {navigate} from 'gatsby'
import Seo from '../components/seo'
import { ,droneList,picList,videoContentList,videoAdList,defaultList }from '../components/list'
import {GlobalStyle} from '../pages/index'
import {ProjectsArrow,ProjectsHeader,ProjectsContainer,ProjectItemHeader} from '../components/styledcomponents'


function Projects({location}) {
let pagetitle;
let keys="default";
    let projectitems;
    let mycomp=location.state ? location.state.comp : bannerList ;
    let mydark=location.state ? location.state.dark.dark : true;
    switch(mycomp) {
        case "droneList":
            projectitems=droneList;
            pagetitle="Drone";
            keys="drone,havadançekim,havadangörüntüleme,videoçekimi,kamera,montaj,kurgu,edit,djı,phtantom,video,videoreklam,tanıtımfilmi,videographer,freelancer,prodüksiyon,bcyart,burakcanyüksel,videoiçerik,reklamfilmi"
          break;
        case "picList": 
        projectitems=picList;
        pagetitle="Fotoğraf";
        keys="gelin,damat,düğünçekimi,gelinçekim,damatçekim,düğünalbümü,albümtasarımı,photshop,albümbaskı,wedding,düğün,ürünçekimi,ürünler,eticaret,grafiktasarım,photshop,fotoğrafçı,grafiktasarım,bcyart,burakcanyüksel,konser,konserçekimi,etkinlik,sanatçı,eventçekim"
          break;
          case "videoContentList":
            projectitems=videoContentList;
            pagetitle="Video İçerik";
            keys="karadeniz,karadenz,rize,batum,ayder,yayla,garadeniz,video,cinematic,drone,dıron,Gürcistan,gezi,tur,çekim,kamera,camera,film,videoiçeriküreticisi,premir,kurgu,montaj,edit,colorgrading,freelancer,prodüksiyon,reklam,videoreklam,reklamfilmi,tanıtımfilmi,videographer,freelancer,bcyart,burakcanyüksel,lamgo,yücehisar,huseryaylası,koçdüzüyaylası,fırtınaderesi,yeşilcennet,batumi,georgia,kahve,coffe,tv,kuaför,güzellik,saçboyama,perma,ombre,düğün,gelin,gelinsaçı,makyaj,İstanbul,Beşiktaş,vapur,Kadıköy,Sultanahmet,offroad,safari,jip,jeep,cip,yayla,yol,çamur,kar,toz,toprak,araba,beygir,motor,bcyart,burakcanyüksel"
          break;
          case "videoAdList":
            projectitems=videoAdList;
            pagetitle="Video Reklam";
            keys="aplikasyon,apptanıtım,aplikasyontanıtım,applicationtanıtım,uyguluamatanıtım,veyseltiryaki,seçim,siyasiparti,siyasiaday,seçimkampanyas,türkiyeişkurumu,işkur,videoreklam,reklam,film,videotasarım,montaj,kurgu,sosyalmedya,instagramreklam,videoçekimi,motiongraphic,animasyon,tanıtımfilmi,prodüksiyon,videoreklam,reklamfilmi,videotasarımı,videographer,bcyart,prodüksiyon,burakcanyüksel,unicef,dünyaçocukgünü,çocuk,videoreklam,animasyon,videoiçerik,prodüksiyon,kurgu,montaj,videographer,videoproducer,aftereffects,içerik,sosyalmedya,youtube,tanıtımfilmli,çekim,kamera,reklammfilmi,reklam,videographer,freelancer,videoeditor,prodüksiyon,bcyart,burakcanyüksel"
          break;
        default:
            projectitems=defaultList;
            pagetitle="Hatalı giriş yaptınız";
            keys="hata"
      }      

    return (

        <div>
            <ProjectsArrow>
            <svg onClick={()=>navigate("/")}
              >
                <path
                  d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                  fill="#FFF"
                  fillRule="evenodd"
                ></path>
              </svg>

            </ProjectsArrow> 
          <GlobalStyle dark={mydark}/>
            <Seo
        title={`${pagetitle} | BCY ART`}
        keywords={keys}
            />
        
              <ProjectsContainer>  
           
<ProjectsHeader> {pagetitle} </ProjectsHeader>
     {projectitems.map(({ id,title,video,image}) => (
    
  

<div  key={id} id={`a${id}`}>

 {
video?
<iframe className="responsive-iframe" src={video}  frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
:

  <div className="ifpic"><img src={image} /> </div> 


 }
     <ProjectItemHeader>
    { title}
   </ProjectItemHeader>
   
   </div>


))}
</ProjectsContainer>  

        </div>
    )
}

export default Projects
