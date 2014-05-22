var http = require("http");

http.createServer(function(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        var form = '<form id="form_848387" class="appnitro"  method="post" action="https://api.instagram.com/v1/subscriptions/">'+
'    <div class="form_description">'+
'        <h2>Make subscription</h2>'+
'        <p>This is your form description. Click here to edit.</p>'+
'    </div>                        '+
'    <ul >'+
'    '+
'        <li id="li_1" >'+
'            <label class="description" for="element_1">client_id </label>'+
'            <div>'+
'                <input id="element_1" name="client_id" class="element text medium" type="text" maxlength="255" value=""/> '+
'            </div> '+
'        </li>        '+
'        <li id="li_2" >'+
'            <label class="description" for="element_2">client_secret </label>'+
'            <div>'+
'                <input id="element_2" name="client_secret" class="element text medium" type="text" maxlength="255" value=""/> '+
'            </div> '+
'        </li>        '+
'        <li id="li_6" >'+
'            <label class="description" for="element_6">Oobject </label>'+
'            <div>'+
'                <select class="element select medium" id="element_6" name="object"> '+
'                    <option value="user" >user</option>'+
'                    <option value="tag" >tag</option>'+
'                    <option value="location" >location</option>'+
'                    <option value="geography" >geography</option>'+
'           </select>'+
'            </div> '+
'        </li>        '+
'        <li id="li_3" >'+
'            <label class="description" for="element_3">aspect </label>'+
'            <div>'+
'                <input id="element_3" name="aspect" class="element text medium" type="text" maxlength="255" value=""/> '+
'            </div><p class="guidelines" id="guide_3"><small>media</small></p> '+
'        </li>        '+
'        <li id="li_4" >'+
'            <label class="description" for="element_4">tag_name </label>'+
'            <div>'+
'                <input id="element_4" name="object_id" class="element text medium" type="text" maxlength="255" value=""/> '+
'            </div><p class="guidelines" id="guide_4"><small>media</small></p> '+
'        </li>        '+
'        <li id="li_5" >'+
'            <label class="description" for="element_5">verify_token </label>'+
'            <div>'+
'                <input id="element_5" name="verify_token" class="element text medium" type="text" maxlength="255" value=""/> '+
'            </div> '+
'        </li>        '+
'        <li id="li_6" >'+
'            <label class="description" for="element_6">callback_url </label>'+
'            <div>'+
'                <input id="element_6" name="callback_url" class="element text medium" type="text" maxlength="255" value=""/> '+
'            </div> '+
'        </li>'+
'    '+
'        <li class="buttons">'+
'            <input type="hidden" name="form_id" value="848387" />'+
'            '+
'            <input id="saveForm" class="button_text" type="submit" name="submit" value="Submit" />'+
'        </li>'+
'    </ul>'+
'</form>';
        response.write(form);
        response.end();
}).listen(8888);
