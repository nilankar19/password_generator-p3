# password_generator_
<a href="https://nilankar19.github.io/password_generator/" ><img
  src="img/passwall.png"
  alt="Alt text"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 300px">
  </a>
 <div class="first1">
        <div style="width:15vw; height: 20vh; margin-left: 20px; position: relative;">
            <div class="container1"></div>
            <div  class="container2" style=" background-image: url(img/password.png);"></div>
        </div>
        <div style="width:15vw; height: 20vh; margin-left: 20px; position: relative;">
            <div class="container1"></div>
            <a href="https://github.com/nilankar19" class="container2" style=" background-image: url(img/code.jpg);"></a>
        </div>
        <div style="width:15vw; height: 20vh; margin-left: 20px; position: relative;">
            <div class="container1"></div>
            <div class="container2" style=" background-image: url(img/key.jpg);"></div>
        </div>
        <div></div>

    </div>
        
    <br>
    <div class="container3">
        <div class="con3_first">
         <textarea id="boxid" class ="box1">password</textarea>
         <button id="generate_butn" class="button_ran" title="" onclick="ran_pass()">Generator</button>
        </div>
        <br><br>
        
            <div class="box_a">
                <div style="float:left; width:10vw; font-size: 1.2vw;">password length</div>
                <div id="box_num2" class="box_num hover"  onclick="pass_range(2)">2</div>
                <div id="box_num4" class="box_num hover"  onclick="pass_range(4)">4</div>
                <div id="box_num6" class="box_num hover"  onclick="pass_range(6)">6</div>
                <div id="box_num8" class="box_num hover"  onclick="pass_range(8)">8</div>
                <div id="box_num10" class="box_num hover" onclick="pass_range(10)">10</div>
                <input type="number" placeholder="enter length" id="box_num11" class="box_num hover" onclick="remove_box()" onchange="uinput(true)"></input>
            </div>

    </div>
