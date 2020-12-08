function initPage ()  {
    if(window.location.href.includes("Mode=Edit") || window.location.href.includes("/Forms/") || window.location.href.includes("/Lists/") || window.location.href.includes('_layouts')) 
    {
        $('div[data-sp-feature-tag="PageTitle"]').show();
        $('div[data-automation-id="pageHeader"]').show();
        $('.headerStyles').hide();
        
        $('.commandBarWrapper').css('cssText',
              "position:relative!important;top:0!important;width:100%;"
      );
    }
    else{
        $('.commandBarWrapper').css(
          'cssText',
          "position: absolute!important;top: 89px!important;width: 100%;"
        );
        $('div[class^="headerRow"]').css({
            position: 'absolute',
        top:'0px',
        width:'100%'

        });
        
        $('.headerStyles').show();
        $('.headerStyles').css({
          
            'margin-top':'147px'
        })
        
        $('div[data-sp-feature-tag="PageTitle"]').hide();
        $('div[data-automation-id="pageHeader"]').hide();
    }
}
((history) => {
    var pushState = history.pushState;
      history.pushState = (state, key, path) => {
          pushState.apply(history, [state, key, path]);
      setTimeout(()=>{
          initPage();
  }, 200)

      }
        

  })(window.history);
$(document).ready(()=>{
    setTimeout(
    () => {initPage()}, 250);
});

