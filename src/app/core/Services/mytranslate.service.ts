import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, RendererFactory2, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MytranslateService {

  private readonly _TranslateService = inject(TranslateService)
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  private readonly _RendererFactory2 = inject(RendererFactory2).createRenderer(null,null)

  constructor( ) {
    if (isPlatformBrowser(this._PLATFORM_ID) ) {

      let savedLang = localStorage.getItem('lang')

      this._TranslateService.setDefaultLang('en')
  
      this.setLang()
    }
  
   }

   setLang(){
    let savedLang = localStorage.getItem('lang');

    if(savedLang!==null){
      this._TranslateService.use(savedLang !)
    }
    if(savedLang === 'en'){
      this._RendererFactory2.setAttribute(document.documentElement,'dir', 'ltr')
      this._RendererFactory2.setAttribute(document.documentElement,'lang', 'en')
    }
    else if(savedLang === 'ar'){
      this._RendererFactory2.setAttribute(document.documentElement,'dir', 'rtr')
      this._RendererFactory2.setAttribute(document.documentElement,'lang', 'ar')

    }
   }
changeLang(lang:string):void{
if (isPlatformBrowser(this._PLATFORM_ID) ) {
  
  localStorage.setItem('lang',lang)

 this.setLang()
}

  
}
  
}
