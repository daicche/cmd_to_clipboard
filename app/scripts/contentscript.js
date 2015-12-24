'use strict';

// console.log('\'Allo \'Allo! Content script');
//# sourceMappingURL=contentscript.js.map

// var a = "# curl -O https://raw.githubusercontent.com/blacklabelops/jenkins/master/docker-compose.yml"

var regex = /^(\$|\#)/

$('pre').each(function(i, $cmd_with_prompt){
  console.log($cmd_with_prompt)

  var cmds_with_prompt = $cmd_with_prompt.textContent.split('\n')

  // 空文字削除
  cmds_with_prompts = $.grep(cmds_with_prompt, function(e){return e;})
  $.each(cmds_with_prompts, function(i, cmd_with_prompt){
    if ( cmd_with_prompt.match(regex) ) {
      var cmd = cmd_with_prompt.replace(regex, '')
      // alert(cmd)
      // $cmd_with_prompt.appendChild(cmd)
        $('<button>', {
          'data-clipboard-text': cmd,
          'class': 'cmd_to_clipboard_btn',
        }).text('copy').appendTo($cmd_with_prompt)
    }
  })
})