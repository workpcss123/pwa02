function get_browser_info(){
    var ua=navigator.userAgent,
        tem,
        M=ua.match(/(edg|opera|chrome|safari|firefox|samsungbrowser)\/?\s*(\d+(\.\d+)*)/i) || []; 

    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+(\.\d+)*)/)
        if(tem!=null) {
            return {name:'Opera', version:tem[1]};
        }
        tem=ua.match(/edg.\/?\s*(\d+(\.\d+)*)/i)
        if(tem!=null) {
            return {name:'Edge', version:tem[1]};
        }
    }   

    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+(\.\d+)*)/i))!=null) { //for safari
      M.splice(1,1,tem[1]);
    }
    return {
      name: M[0],
      version: M[1],
      useragent: ua
    };
 }

function get_browser_class_name(){
  let browserInfo = get_browser_info();
  switch (browserInfo.name) {
    case 'Chrome':
      return "fa-chrome"
    case 'Edge':
      return "fa-edge"
    case 'Firefox':
      return "fa-firefox"
    case 'Opera':
      return "fa-opera"
    case 'Safari':
      return "fa-safari"
  }
}