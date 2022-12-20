import {Box,Img,Text,Select, Input,Checkbox,Heading,UnorderedList,ListItem,Button,useToast} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import {Link, useNavigate} from 'react-router-dom'
import {Auth} from '../Components/Context/Auth'
import { useContext } from 'react'
function Booking(){
  const navigates=useNavigate()
  const toast = useToast()
  const {register,prasdata,searchdata}=useContext(Auth)
  console.log("No")
  console.log(searchdata)
console.log(register)
  const handlechages=()=>{
    toast({
        position: 'top',
        title: 'Booking successfully.',
        description:"Your Enjoy Your Trip",
        status: 'success',
        duration: 4000,
        isClosable: true,
    }) 
    function greet() {
        navigates("/")  
    }
    
    setTimeout(greet, 2000)
   
}
    return(
        <div >
            <Navbar/>
        <Box display={'flex'} w={'80%'} m={'auto'}mt={'3'} >
            <Box  w={'65%'} >
            <Box boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' p='6' rounded='md' bg='white' display={'flex'}>
                 <Box><Img w={'10'}  src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8jHyAAAAAgHB0GAAAnIiOzs7Pn5uYKAAC8u7vFxMQOBQjLysuenZ0VEBGrqqt8ensaFRb09PTV1NUTDQ87ODnv7+8uKiuHhoZLSEmXlpZaWFne3t5VUlMMAAUZFBZhX19samtvbm6Bf4BCP0CjoqI1MzNXVVZLSUleXV3Z2dmrI868AAAFCUlEQVR4nO2de5uiLBiH14fKyrQwO0zTuZlm6/t/wN3ed/YSnVTAAzDzu/+H67kFAZHDr18AAAAAAAAAAAAAAAAAAAAAAAAA+Ic/n3xl7psOqxHiyeaWUBHJcTOJTYdYh3jwGlHAmVcE4wElt4GrktvZgQ7Fdqkl8dnWdLAabI8UVet9SkZ0cs0xntFBUu9/DjRzqq4OgkTJ70FCI9Nhy3Mm2fopwujsSDH6i0DD70GwcKKLnAdcU9Dz+HBuOvxqxlo19B+MxqYFqpg8E2Q8SoI8SfRsKGC94vyrIO/1VrvZJsyzme1W1PtSo5ndFXXJcoIsoNuguPnwBzcK8knYssOIVXnLFck+CavCXYbBPuvIF53EqsVlmAn1QBupZJtedvwzXLccpzYTygRKO9nezd/lUk5ajVOfVaa2kUpJrDOK7NpajLXY9DKCU6XE04wihS3FWItlplFUHkaPREUW2NiersXRqGIJPsiUYmBhY7MUv3e1WsPLXijEnn2fGe9CT8HftLJYCL3p8L3h+OrTF4qQ9KYktkI9ZauG46vNXIhO+yUSX2WybXi6TqctWKL7Di2FqbnEtram30hs4nOybHTqC5WU9KciGsqmDQbpeIZ/1MjnNW1Oe4PGomuCWZS28+qdfco07XOiWWPRNcEuffa1apfQYfDfjUXXBGlDU7Mji4SMbBrWxOmjPxxr5XRMK4NVo2+hctXsx4T+wqrGVPi6D+p92oXpsMaqUc04NazZyAuNqVVzGYJhzT9IQsdq1dwwDOWBoSlgKA8MTQFDeWBoChjKA0NTwFAeGJoChvLA0BQ/ynA/9WuwfA+aelZNMjpfhR/A+8LdFTII/0hZfxdaMWUaejJ7DnRgfE8n4473Va0Vs5VEkmvjWmPQrt8DOpoUHLUv6HlDg4r3LgT/luLFmOFCf1W+mqKpPxghVQfXCKxvyNDrpI4+MNT5j7sqQs/jRyOGF/XdW9qQEcNrZ5XU1P/g7iqpqRexS0MzC6RgCEMYwtBSQ8Z5yRkLrhuyiKi/O35ciRJFSzcMg+Fs/Lmgcr7uq31aumDIe+vMasopj6oTuWSYLPK7TJbHXnUydwyDZ8vb1/I5WG8Y7Z7mIK9ou2Hhku2b7Ltou2HhTNJyL9miWm54OBXmEQ6rkztgSPfCPGLJAY7dhqxsv+VM7k2027B0f8JILhe7DUv/5frfwrBsnizOnxXipGHpT065OUnLDcv2Pcer72BYWkvl/pDbbdgrm839Fi1N6WbQgdwnlN2GpXsuj3I/We02LOsQfcnD6yw35C+Fecj+obPcsPgsl7t0a2W5YWGXKNcZumDIvKe7lj+kp9usN/T46mspxh/yZ2Tab+jxIB/jZKUwYeqAocfotzhbsz0pTXq7YPi3GMUm9ayW2g3DzJkgkrMXMIQhDGEIQxjCEIYwhCEMYfgDDcWDzs5q19A4Yni4pYkVF/o7YihMfocKK75cMmT8U3GqKOiMocfodToahS/KSZ0x9Dy+J9K4aschQ01gCEMYwhCGMIThTzA0cxrPS0cnKvxnaOQi1o3uVZXqMGZCMHPxSsuYuichf1Nee5Ss9m+Vzo6NiG7VwbTDqZtzI9jQ2GFR8aqTekoG72Pxhx0omr1Iz7+23WVwjUvqmuUif4W6BozeDDWjAvdTQAlnLXDY05sdVyItB5eXVb9xFqfQfPkBAAAAAAAAAAAAAAAAAAAAAAAAAAAA3OMPXIddF8y+rvwAAAAASUVORK5CYII='}/>
                 </Box>
                 <Box ml="2">
                    <Text mt='1'>Signed in as</Text>
                    <Text>{register.email}</Text>
                    <Text fontSize={'14'} color={'green'}>You will earn 200 Expedia Rewards points</Text>
                 </Box>
            </Box>
            <Box mt={'5'} boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' p='6' borderTop={'1px solid white'}  >
                <Text fontSize={'18'} fontWeight={'bold'}>Who's checking in?</Text>
                <Box display={'flex'} mt={'2'}>
                    <Text fontSize={'15'} fontWeight={'bold'}>Room1  :</Text>
                    <Text>  2 Adults 1 King Bed Non-smoking</Text>
                </Box>
                <Box display={'flex'}> <Text display={'flex'} mt={'5'} fontWeight={'bold'}>Traveller name<Text color={'red'}>*</Text></Text></Box>
                <Box mt={'2'} w={'30%'}>
                <Select placeholder={register.FirstName+" "+register.LastName} >
                 <option value='New Traveller'>New Traveller</option>
                 <option value='Add new Traveller'>Add new Traveller</option>
                  <option value='Select from my accound'>Select from my accound</option>
                  </Select>
                </Box>
                <Box display={'flex'}>
                    <Box><Box display={'flex'}> <Text display={'flex'} mt={'5'} fontWeight={'bold'}>First name<Text color={'red'}>*</Text></Text></Box>
                    <Input mt={'2'} placeholder='First name'/>
                    </Box>
                    <Box ml={'5'}><Box display={'flex'}> <Text display={'flex'} mt={'5'} fontWeight={'bold'}>Surname<Text color={'red'}>*</Text></Text></Box>
                    <Input mt={'2'} placeholder='Surname'/>
                    </Box>
                </Box>
                <Box>
                <Box display={'flex'}> <Text display={'flex'} mt={'5'} fontWeight={'bold'}>Mobile phone number <Text color={'red'}>*</Text></Text></Box>
                 <Box display={'flex'} mt={'3'}>
                    <Box w={'40'}>
                    <Select placeholder='India +91' >
                    <option data-countryCode="GB" value="44" Selected>Norway (+47)</option>
	        <option data-countryCode="US" value="1">UK (+44)</option>
		<option data-countryCode="DZ" value="213">Algeria (+213)</option>
		<option data-countryCode="AD" value="376">Andorra (+376)</option>
		<option data-countryCode="AO" value="244">Angola (+244)</option>
		<option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
		<option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
		<option data-countryCode="AR" value="54">Argentina (+54)</option>
		<option data-countryCode="AM" value="374">Armenia (+374)</option>
		<option data-countryCode="AW" value="297">Aruba (+297)</option>
		<option data-countryCode="AU" value="61">Australia (+61)</option>
		<option data-countryCode="AT" value="43">Austria (+43)</option>
		<option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
		<option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
		<option data-countryCode="BH" value="973">Bahrain (+973)</option>
		<option data-countryCode="BD" value="880">Bangladesh (+880)</option>
		<option data-countryCode="BB" value="1246">Barbados (+1246)</option>
		<option data-countryCode="BY" value="375">Belarus (+375)</option>
		<option data-countryCode="BE" value="32">Belgium (+32)</option>
		<option data-countryCode="BZ" value="501">Belize (+501)</option>
		<option data-countryCode="BJ" value="229">Benin (+229)</option>
		<option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
		<option data-countryCode="BT" value="975">Bhutan (+975)</option>
		<option data-countryCode="BO" value="591">Bolivia (+591)</option>
		<option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
		<option data-countryCode="BW" value="267">Botswana (+267)</option>
		<option data-countryCode="BR" value="55">Brazil (+55)</option>
		<option data-countryCode="BN" value="673">Brunei (+673)</option>
		<option data-countryCode="BG" value="359">Bulgaria (+359)</option>
		<option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
		<option data-countryCode="BI" value="257">Burundi (+257)</option>
		<option data-countryCode="KH" value="855">Cambodia (+855)</option>
		<option data-countryCode="CM" value="237">Cameroon (+237)</option>
		<option data-countryCode="CA" value="1">Canada (+1)</option>
		<option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
		<option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
		<option data-countryCode="CF" value="236">Central African Republic (+236)</option>
		<option data-countryCode="CL" value="56">Chile (+56)</option>
		<option data-countryCode="CN" value="86">China (+86)</option>
		<option data-countryCode="CO" value="57">Colombia (+57)</option>
		<option data-countryCode="KM" value="269">Comoros (+269)</option>
		<option data-countryCode="CG" value="242">Congo (+242)</option>
		<option data-countryCode="CK" value="682">Cook Islands (+682)</option>
		<option data-countryCode="CR" value="506">Costa Rica (+506)</option>
		<option data-countryCode="HR" value="385">Croatia (+385)</option>
		<option data-countryCode="CU" value="53">Cuba (+53)</option>
		<option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
		<option data-countryCode="CY" value="357">Cyprus South (+357)</option>
		<option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
		<option data-countryCode="DK" value="45">Denmark (+45)</option>
		<option data-countryCode="DJ" value="253">Djibouti (+253)</option>
		<option data-countryCode="DM" value="1809">Dominica (+1809)</option>
		<option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
		<option data-countryCode="EC" value="593">Ecuador (+593)</option>
		<option data-countryCode="EG" value="20">Egypt (+20)</option>
		<option data-countryCode="SV" value="503">El Salvador (+503)</option>
		<option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
		<option data-countryCode="ER" value="291">Eritrea (+291)</option>
		<option data-countryCode="EE" value="372">Estonia (+372)</option>
		<option data-countryCode="ET" value="251">Ethiopia (+251)</option>
		<option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
		<option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
		<option data-countryCode="FJ" value="679">Fiji (+679)</option>
		<option data-countryCode="FI" value="358">Finland (+358)</option>
		<option data-countryCode="FR" value="33">France (+33)</option>
		<option data-countryCode="GF" value="594">French Guiana (+594)</option>
		<option data-countryCode="PF" value="689">French Polynesia (+689)</option>
		<option data-countryCode="GA" value="241">Gabon (+241)</option>
		<option data-countryCode="GM" value="220">Gambia (+220)</option>
		<option data-countryCode="GE" value="7880">Georgia (+7880)</option>
		<option data-countryCode="DE" value="49">Germany (+49)</option>
		<option data-countryCode="GH" value="233">Ghana (+233)</option>
		<option data-countryCode="GI" value="350">Gibraltar (+350)</option>
		<option data-countryCode="GR" value="30">Greece (+30)</option>
		<option data-countryCode="GL" value="299">Greenland (+299)</option>
		<option data-countryCode="GD" value="1473">Grenada (+1473)</option>
		<option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
		<option data-countryCode="GU" value="671">Guam (+671)</option>
		<option data-countryCode="GT" value="502">Guatemala (+502)</option>
		<option data-countryCode="GN" value="224">Guinea (+224)</option>
		<option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
		<option data-countryCode="GY" value="592">Guyana (+592)</option>
		<option data-countryCode="HT" value="509">Haiti (+509)</option>
		<option data-countryCode="HN" value="504">Honduras (+504)</option>
		<option data-countryCode="HK" value="852">Hong Kong (+852)</option>
		<option data-countryCode="HU" value="36">Hungary (+36)</option>
		<option data-countryCode="IS" value="354">Iceland (+354)</option>
		<option data-countryCode="IN" value="91">India (+91)</option>
		<option data-countryCode="ID" value="62">Indonesia (+62)</option>
		<option data-countryCode="IR" value="98">Iran (+98)</option>
		<option data-countryCode="IQ" value="964">Iraq (+964)</option>
		<option data-countryCode="IE" value="353">Ireland (+353)</option>
		<option data-countryCode="IL" value="972">Israel (+972)</option>
		<option data-countryCode="IT" value="39">Italy (+39)</option>
		<option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
		<option data-countryCode="JP" value="81">Japan (+81)</option>
		<option data-countryCode="JO" value="962">Jordan (+962)</option>
		<option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
		<option data-countryCode="KE" value="254">Kenya (+254)</option>
		<option data-countryCode="KI" value="686">Kiribati (+686)</option>
		<option data-countryCode="KP" value="850">Korea North (+850)</option>
		<option data-countryCode="KR" value="82">Korea South (+82)</option>
		<option data-countryCode="KW" value="965">Kuwait (+965)</option>
		<option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
		<option data-countryCode="LA" value="856">Laos (+856)</option>
		<option data-countryCode="LV" value="371">Latvia (+371)</option>
		<option data-countryCode="LB" value="961">Lebanon (+961)</option>
		<option data-countryCode="LS" value="266">Lesotho (+266)</option>
		<option data-countryCode="LR" value="231">Liberia (+231)</option>
		<option data-countryCode="LY" value="218">Libya (+218)</option>
		<option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
		<option data-countryCode="LT" value="370">Lithuania (+370)</option>
		<option data-countryCode="LU" value="352">Luxembourg (+352)</option>
		<option data-countryCode="MO" value="853">Macao (+853)</option>
		<option data-countryCode="MK" value="389">Macedonia (+389)</option>
		<option data-countryCode="MG" value="261">Madagascar (+261)</option>
		<option data-countryCode="MW" value="265">Malawi (+265)</option>
		<option data-countryCode="MY" value="60">Malaysia (+60)</option>
		<option data-countryCode="MV" value="960">Maldives (+960)</option>
		<option data-countryCode="ML" value="223">Mali (+223)</option>
		<option data-countryCode="MT" value="356">Malta (+356)</option>
		<option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
		<option data-countryCode="MQ" value="596">Martinique (+596)</option>
		<option data-countryCode="MR" value="222">Mauritania (+222)</option>
		<option data-countryCode="YT" value="269">Mayotte (+269)</option>
		<option data-countryCode="MX" value="52">Mexico (+52)</option>
		<option data-countryCode="FM" value="691">Micronesia (+691)</option>
		<option data-countryCode="MD" value="373">Moldova (+373)</option>
		<option data-countryCode="MC" value="377">Monaco (+377)</option>
		<option data-countryCode="MN" value="976">Mongolia (+976)</option>
		<option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
		<option data-countryCode="MA" value="212">Morocco (+212)</option>
		<option data-countryCode="MZ" value="258">Mozambique (+258)</option>
		<option data-countryCode="MN" value="95">Myanmar (+95)</option>
		<option data-countryCode="NA" value="264">Namibia (+264)</option>
		<option data-countryCode="NR" value="674">Nauru (+674)</option>
		<option data-countryCode="NP" value="977">Nepal (+977)</option>
		<option data-countryCode="NL" value="31">Netherlands (+31)</option>
		<option data-countryCode="NC" value="687">New Caledonia (+687)</option>
		<option data-countryCode="NZ" value="64">New Zealand (+64)</option>
		<option data-countryCode="NI" value="505">Nicaragua (+505)</option>
		<option data-countryCode="NE" value="227">Niger (+227)</option>
		<option data-countryCode="NG" value="234">Nigeria (+234)</option>
		<option data-countryCode="NU" value="683">Niue (+683)</option>
		<option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
		<option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
		<option data-countryCode="NO" value="47">Norway (+47)</option>
		<option data-countryCode="OM" value="968">Oman (+968)</option>
		<option data-countryCode="PW" value="680">Palau (+680)</option>
		<option data-countryCode="PA" value="507">Panama (+507)</option>
		<option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
		<option data-countryCode="PY" value="595">Paraguay (+595)</option>
		<option data-countryCode="PE" value="51">Peru (+51)</option>
		<option data-countryCode="PH" value="63">Philippines (+63)</option>
		<option data-countryCode="PL" value="48">Poland (+48)</option>
		<option data-countryCode="PT" value="351">Portugal (+351)</option>
		<option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
		<option data-countryCode="QA" value="974">Qatar (+974)</option>
		<option data-countryCode="RE" value="262">Reunion (+262)</option>
		<option data-countryCode="RO" value="40">Romania (+40)</option>
		<option data-countryCode="RU" value="7">Russia (+7)</option>
		<option data-countryCode="RW" value="250">Rwanda (+250)</option>
		<option data-countryCode="SM" value="378">San Marino (+378)</option>
		<option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
		<option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
		<option data-countryCode="SN" value="221">Senegal (+221)</option>
		<option data-countryCode="CS" value="381">Serbia (+381)</option>
		<option data-countryCode="SC" value="248">Seychelles (+248)</option>
		<option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
		<option data-countryCode="SG" value="65">Singapore (+65)</option>
		<option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
		<option data-countryCode="SI" value="386">Slovenia (+386)</option>
		<option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
		<option data-countryCode="SO" value="252">Somalia (+252)</option>
		<option data-countryCode="ZA" value="27">South Africa (+27)</option>
		<option data-countryCode="ES" value="34">Spain (+34)</option>
		<option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
		<option data-countryCode="SH" value="290">St. Helena (+290)</option>
		<option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
		<option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
		<option data-countryCode="SD" value="249">Sudan (+249)</option>
		<option data-countryCode="SR" value="597">Suriname (+597)</option>
		<option data-countryCode="SZ" value="268">Swaziland (+268)</option>
		<option data-countryCode="SE" value="46">Sweden (+46)</option>
		<option data-countryCode="CH" value="41">Switzerland (+41)</option>
		<option data-countryCode="SI" value="963">Syria (+963)</option>
		<option data-countryCode="TW" value="886">Taiwan (+886)</option>
		<option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
		<option data-countryCode="TH" value="66">Thailand (+66)</option>
		<option data-countryCode="TG" value="228">Togo (+228)</option>
		<option data-countryCode="TO" value="676">Tonga (+676)</option>
		<option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
		<option data-countryCode="TN" value="216">Tunisia (+216)</option>
		<option data-countryCode="TR" value="90">Turkey (+90)</option>
		<option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
		<option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
		<option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
		<option data-countryCode="TV" value="688">Tuvalu (+688)</option>
		<option data-countryCode="UG" value="256">Uganda (+256)</option>
		 <option data-countryCode="GB" value="44">UK (+44)</option> 
		<option data-countryCode="UA" value="380">Ukraine (+380)</option>
		<option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
		<option data-countryCode="UY" value="598">Uruguay (+598)</option>
		<option data-countryCode="US" value="1">USA (+1)</option> 
		<option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
		<option data-countryCode="VU" value="678">Vanuatu (+678)</option>
		<option data-countryCode="VA" value="379">Vatican City (+379)</option>
		<option data-countryCode="VE" value="58">Venezuela (+58)</option>
		<option data-countryCode="VN" value="84">Vietnam (+84)</option>
		<option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
		<option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
		<option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
		<option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
		<option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
		<option data-countryCode="ZM" value="260">Zambia (+260)</option>
		<option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                  </Select>
                    </Box>
                    <Box ml={'4'}>
                        <Input placeholder='Mobile phone number'/>
                    </Box>
                 </Box>
                </Box>
                <Box mt={'5'}>
            <Checkbox defaultChecked>Receive text alerts about this trip (free of charge).</Checkbox>
            </Box>
            </Box>
             <Box mt={'5'} boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' p='6' borderTop={'1px solid white'}  >
               <Heading  size='lg'>Payment method</Heading>
               <Box display={'flex'} mt={'5'}>
                <Img w={'10'} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACnCAMAAABDyLzeAAAAmVBMVEX///8AkxcAjgAAkAAAiwD///3//f8AiQAAkhEAkAkAhwAAkgAAlRf2+/b///sAkhnQ6dOezqLV69nw+fEklyZUsWAvnzoYmSgkmi5Ep0lwuXOw2bHh7uHo9Od3un9qtG1RqFOPxo6/3sBps3Oy1reCvYVEoUl2vnyAwIG527ZgsWPE5cym0alPo1aGvYxvsXSazJmUwZdKrlY8VNDgAAAEBElEQVR4nO2bXXPiOgyGHX+A0zhJSTiBlPBRWigEzpbd///j1sC2kbeBndmLI80ZPZ3elJu3liW/ko0QDMMwDMMwDMMwDMMwDMMwDMMwDMPcxwhzBlvG/wEj0mL0TzWZ1k+zJsVWc4f5QmkZWxvLoVoW2Gpukr5pG32gV3NsPf0Y8SyjDls12Ip6MeJRWqBTj7AV9WJEuVJApqyxFfVjxCLJO5nxdC5I1tDBGgbd2WOGregGLoj6ElvOLV5UEPUSW88NXmHUrVpj6+nFiHkddzJztSG5Ob05eoEVPt7SjLoR66EDOoc0o+7txxbuTvUmaIY928GSFNdE/cfgYOFyxq/Ygm6Rw+XUL9hybvEsQYW3Y5q5PhCP0yCJqEY9Xarooyi5SC2ptkV7DQ9MS7Mp8g3mGByYkd7QNJ1CfIO5nlRUo/447lS63FI9MLM34D+calOSUff+4wH6D6JJ5GtSBZNIkk2iUeA/JnOiMosKnESOaq9xHtOA3Rm3VGvSPAGrGekDtp5btIGda0maeJ8xBwWibuOCaLKnSxD2SG1oqvQ+qbNzdGed/sSEQ0QnT9h6bjELbGdSEg17WcHdiTs6vrdER5DsLq5p9m6+xK+AAXHJEUnGeSXTedM0pehf1mPg4v8ts8F/rPAX5vBtuarrbbtbi8HXu8rAz+V6hlXim1omKrb+R6n3L58aMdLgKFJjBIUXyq0Pq3PnX+fdb89yBn5uj6HxTFG5bhJj7Zei8wpLvFoh1U5jzDucDkc6MMBGlC34OFczPKOU1sFF5Rge3pnYJ9AeI9ZOI4otnMH5frfL6Ez86P4JlyPfYoZDOL2BHz2A3WkTg1Q6LxixB2ry6GHdLWgLT3ZvlDAdiC/tT7BGft60ZMGkJrITbBs/KGH745LdNbyZ2cEmU31HFSkut/7Wfipy0ceIq5la4JTGFCY1z/DySlXXP45gxZItrsIzftttg8b3EuJMwYnSkMJy+s43B8UpvsQ4mHKrFbbCCybbJV1P6S6XwMFsQc6wJf5iXsEjUh/EYQJkkrkg9EZzCB8pVOIU+Hj0ovSBSSsgLB+ewGsAF5EoSlcMfESTR0lw6FN6qpIuAysKeSA1SDzEN2TGpO6KjGh7F9RF+khrkFjoPp1RMi1IyRRm0StULmjJ9As67d2e5O7ZzaJvh04oZdEZI5rgmcoV/Uwriy68qN9lOo3db/TxNeXjOh3Q02k2v+9QjTXxvIsJu/lrm0mQgXmHT4+vAxKSNNLBBwGSZNjPPMkcCM2p3mqJQoK2PVkJzKHSHTJzkp9jJTtEmyD/mXRfaa1UEkvtTkRX80p5OP2ooml7bEh/WQtoQx15MgzDMAzDMAzDMAzDMAzDMAzDMAzzV/wEre4wbDMIUfgAAAAASUVORK5CYII='}/>
                <Text mt={'3'} fontSize={'14'} color={'green'}>₹0.00 due now. Payment information is only needed to hold your reservation.</Text>
               </Box>
               <Box mt={'5'} gap={'2'} display={'flex'}>
                   <Img w={'8'} src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg" />
                   <Img w={'8'} src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg" />
                   <Img w={'8'} src="https://a.travel-assets.com/egds/marks/payment__visa.svg" />
                   <Img w={'8'} src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa_electron.svg" />
               </Box>
               <Box >
                    <Box><Box display={'flex'}> <Text display={'flex'} mt={'5'} fontWeight={'bold'}>Name on Card<Text color={'red'}>*</Text></Text></Box>
                    <Box  >
                    <Input width={'50%'} mt={'2'} placeholder='Name on Card'/>
                    </Box>
                    </Box>
                    <Box><Box display={'flex'}> <Text display={'flex'} mt={'5'} fontWeight={'bold'}>Debit/Credit card number<Text color={'red'}>*</Text></Text></Box>
                    <Box  >
                    <Input width={'50%'} mt={'2'} placeholder='Debit/Credit card number'/>
                    </Box>
                    </Box>
                </Box>
                <Box display={'flex'}> <Text display={'flex'} mt={'5'} fontWeight={'bold'}>Expiry date<Text color={'red'}>*</Text></Text></Box>
                <Box display={'flex'} gap={'5'}>
                <Box mt={'2'} w={'15%'}>
                <Select placeholder="Month" >
                <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
                  </Select>
                </Box>
                <Box mt={'2'} w={'20%'}>
                <Select placeholder='Year'>
        <option value="2030">2030</option>
          <option value="2029">2029</option>
          <option value="2028">2028</option>
          <option value="2027">2027</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
          <option value="1989">1989</option>
          <option value="1988">1988</option>
          <option value="1987">1987</option>
          <option value="1986">1986</option>
          <option value="1985">1985</option>
          <option value="1984">1984</option>
          <option value="1983">1983</option>
          <option value="1982">1982</option>
          <option value="1981">1981</option>
          <option value="1980">1980</option>
          <option value="1979">1979</option>
          <option value="1978">1978</option>
          <option value="1977">1977</option>
          <option value="1976">1976</option>
          <option value="1975">1975</option>
          <option value="1974">1974</option>
          <option value="1973">1973</option>
          <option value="1972">1972</option>
          <option value="1971">1971</option>
          <option value="1970">1970</option>
          <option value="1969">1969</option>
          <option value="1968">1968</option>
          <option value="1967">1967</option>
          <option value="1966">1966</option>
          <option value="1965">1965</option>
          <option value="1964">1964</option>
          <option value="1963">1963</option>
          <option value="1962">1962</option>
          <option value="1961">1961</option>
          <option value="1960">1960</option>
          <option value="1959">1959</option>
          <option value="1958">1958</option>
          <option value="1957">1957</option>
          <option value="1956">1956</option>
          <option value="1955">1955</option>
          <option value="1954">1954</option>
          <option value="1953">1953</option>
          <option value="1952">1952</option>
          <option value="1951">1951</option>
          <option value="1950">1950</option>
          <option value="1949">1949</option>
          <option value="1948">1948</option>
          <option value="1947">1947</option>
          <option value="1946">1946</option>
          <option value="1945">1945</option>
          <option value="1944">1944</option>
          <option value="1943">1943</option>
          <option value="1942">1942</option>
          <option value="1941">1941</option>
          <option value="1940">1940</option>
          <option value="1939">1939</option>
          <option value="1938">1938</option>
          <option value="1937">1937</option>
          <option value="1936">1936</option>
          <option value="1935">1935</option>
          <option value="1934">1934</option>
          <option value="1933">1933</option>
          <option value="1932">1932</option>
          <option value="1931">1931</option>
          <option value="1930">1930</option>
          <option value="1929">1929</option>
          <option value="1928">1928</option>
          <option value="1927">1927</option>
          <option value="1926">1926</option>
          <option value="1925">1925</option>
          <option value="1924">1924</option>
          <option value="1923">1923</option>
          <option value="1922">1922</option>
          <option value="1921">1921</option>
          <option value="1920">1920</option>
          <option value="1919">1919</option>
          <option value="1918">1918</option>
          <option value="1917">1917</option>
          <option value="1916">1916</option>
          <option value="1915">1915</option>
          <option value="1914">1914</option>
          <option value="1913">1913</option>
          <option value="1912">1912</option>
          <option value="1911">1911</option>
          <option value="1910">1910</option>
          <option value="1909">1909</option>
          <option value="1908">1908</option>
          <option value="1907">1907</option>
          <option value="1906">1906</option>
          <option value="1905">1905</option>
          <option value="1904">1904</option>
          <option value="1903">1903</option>
          <option value="1902">1902</option>
          <option value="1901">1901</option>
          <option value="1900">1900</option>
                </Select>
                </Box>
                </Box>
                <Box><Box display={'flex'}> <Text display={'flex'} mt={'5'} fontWeight={'bold'}>Security code<Text color={'red'}>*</Text></Text></Box>
                    <Box  >
                    <Input width={'10%'} mt={'2'} type='number' placeholder='Code'/>
                    </Box>
                    </Box>
                    <Box mt={'5'}>
            <Checkbox defaultChecked>Remember this card for future use</Checkbox>
            </Box>
             </Box>

             <Box mt={'5'} boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' p='6' borderTop={'1px solid white'} >
             <Text fontSize={'18'} fontWeight={'bold'}>Important information</Text>
             <UnorderedList mt={'4'} fontSize='14'>
                 <ListItem mt={'2'} >Cancellations or changes made after 23:59 (property local time) on 29 Dec 2022 or no-shows are subject to a property fee equal to 100% of the total amount paid for the reservation.</ListItem>
                 <ListItem mt={'2'}>This property offers transfers from the airport and train station (surcharges may apply). To arrange pick-up, guests must contact the property 24 hours prior to arrival, using the contact information on the booking confirmation. Guests will receive an email 24 hours before arrival with check-in instructions. Front desk staff will greet guests on arrival.</ListItem>
                 <ListItem mt={'2'}>To register at this property, guests who are Indian citizens must provide a valid photo identity card issued by the Government of India; travelers who are not citizens of India must present a valid passport and visa.</ListItem>
                 <ListItem mt={'2'}>Please note that Expedia will not issue a tax invoice. You will receive a commercial receipt for the purpose of the transaction. Upon request, a tax invoice would be issued by the hotel.</ListItem>
             </UnorderedList>
             <Text mt={'5'} fontSize={'14'}>By clicking on the button below, I acknowledge that I have reviewed the Privacy Statement Opens in a new window. and Government Travel Advice Opens in a new window. and have reviewed and accept the Rules & Restrictions Opens in a new window. and Terms of Use Opens in a new window..</Text>
             <Box display={"flex"}>
             <Box display={'flex'} mt={'5'}>
                <Img w={'10'} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACnCAMAAABDyLzeAAAAmVBMVEX///8AkxcAjgAAkAAAiwD///3//f8AiQAAkhEAkAkAhwAAkgAAlRf2+/b///sAkhnQ6dOezqLV69nw+fEklyZUsWAvnzoYmSgkmi5Ep0lwuXOw2bHh7uHo9Od3un9qtG1RqFOPxo6/3sBps3Oy1reCvYVEoUl2vnyAwIG527ZgsWPE5cym0alPo1aGvYxvsXSazJmUwZdKrlY8VNDgAAAEBElEQVR4nO2bXXPiOgyGHX+A0zhJSTiBlPBRWigEzpbd///j1sC2kbeBndmLI80ZPZ3elJu3liW/ko0QDMMwDMMwDMMwDMMwDMMwDMMwDMPcxwhzBlvG/wEj0mL0TzWZ1k+zJsVWc4f5QmkZWxvLoVoW2Gpukr5pG32gV3NsPf0Y8SyjDls12Ip6MeJRWqBTj7AV9WJEuVJApqyxFfVjxCLJO5nxdC5I1tDBGgbd2WOGregGLoj6ElvOLV5UEPUSW88NXmHUrVpj6+nFiHkddzJztSG5Ob05eoEVPt7SjLoR66EDOoc0o+7txxbuTvUmaIY928GSFNdE/cfgYOFyxq/Ygm6Rw+XUL9hybvEsQYW3Y5q5PhCP0yCJqEY9Xarooyi5SC2ptkV7DQ9MS7Mp8g3mGByYkd7QNJ1CfIO5nlRUo/447lS63FI9MLM34D+calOSUff+4wH6D6JJ5GtSBZNIkk2iUeA/JnOiMosKnESOaq9xHtOA3Rm3VGvSPAGrGekDtp5btIGda0maeJ8xBwWibuOCaLKnSxD2SG1oqvQ+qbNzdGed/sSEQ0QnT9h6bjELbGdSEg17WcHdiTs6vrdER5DsLq5p9m6+xK+AAXHJEUnGeSXTedM0pehf1mPg4v8ts8F/rPAX5vBtuarrbbtbi8HXu8rAz+V6hlXim1omKrb+R6n3L58aMdLgKFJjBIUXyq0Pq3PnX+fdb89yBn5uj6HxTFG5bhJj7Zei8wpLvFoh1U5jzDucDkc6MMBGlC34OFczPKOU1sFF5Rge3pnYJ9AeI9ZOI4otnMH5frfL6Ez86P4JlyPfYoZDOL2BHz2A3WkTg1Q6LxixB2ry6GHdLWgLT3ZvlDAdiC/tT7BGft60ZMGkJrITbBs/KGH745LdNbyZ2cEmU31HFSkut/7Wfipy0ceIq5la4JTGFCY1z/DySlXXP45gxZItrsIzftttg8b3EuJMwYnSkMJy+s43B8UpvsQ4mHKrFbbCCybbJV1P6S6XwMFsQc6wJf5iXsEjUh/EYQJkkrkg9EZzCB8pVOIU+Hj0ovSBSSsgLB+ewGsAF5EoSlcMfESTR0lw6FN6qpIuAysKeSA1SDzEN2TGpO6KjGh7F9RF+khrkFjoPp1RMi1IyRRm0StULmjJ9As67d2e5O7ZzaJvh04oZdEZI5rgmcoV/Uwriy68qN9lOo3db/TxNeXjOh3Q02k2v+9QjTXxvIsJu/lrm0mQgXmHT4+vAxKSNNLBBwGSZNjPPMkcCM2p3mqJQoK2PVkJzKHSHTJzkp9jJTtEmyD/mXRfaa1UEkvtTkRX80p5OP2ooml7bEh/WQtoQx15MgzDMAzDMAzDMAzDMAzDMAzDMAzzV/wEre4wbDMIUfgAAAAASUVORK5CYII='}/>
                <Text mt={'3'} fontSize={'14'} color={'blue'}>₹0.00 due now.</Text>
               </Box>
               <Box display={'flex'} mt={'5'}>
                <Img w={'10'} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACnCAMAAABDyLzeAAAAmVBMVEX///8AkxcAjgAAkAAAiwD///3//f8AiQAAkhEAkAkAhwAAkgAAlRf2+/b///sAkhnQ6dOezqLV69nw+fEklyZUsWAvnzoYmSgkmi5Ep0lwuXOw2bHh7uHo9Od3un9qtG1RqFOPxo6/3sBps3Oy1reCvYVEoUl2vnyAwIG527ZgsWPE5cym0alPo1aGvYxvsXSazJmUwZdKrlY8VNDgAAAEBElEQVR4nO2bXXPiOgyGHX+A0zhJSTiBlPBRWigEzpbd///j1sC2kbeBndmLI80ZPZ3elJu3liW/ko0QDMMwDMMwDMMwDMMwDMMwDMMwDMPcxwhzBlvG/wEj0mL0TzWZ1k+zJsVWc4f5QmkZWxvLoVoW2Gpukr5pG32gV3NsPf0Y8SyjDls12Ip6MeJRWqBTj7AV9WJEuVJApqyxFfVjxCLJO5nxdC5I1tDBGgbd2WOGregGLoj6ElvOLV5UEPUSW88NXmHUrVpj6+nFiHkddzJztSG5Ob05eoEVPt7SjLoR66EDOoc0o+7txxbuTvUmaIY928GSFNdE/cfgYOFyxq/Ygm6Rw+XUL9hybvEsQYW3Y5q5PhCP0yCJqEY9Xarooyi5SC2ptkV7DQ9MS7Mp8g3mGByYkd7QNJ1CfIO5nlRUo/447lS63FI9MLM34D+calOSUff+4wH6D6JJ5GtSBZNIkk2iUeA/JnOiMosKnESOaq9xHtOA3Rm3VGvSPAGrGekDtp5btIGda0maeJ8xBwWibuOCaLKnSxD2SG1oqvQ+qbNzdGed/sSEQ0QnT9h6bjELbGdSEg17WcHdiTs6vrdER5DsLq5p9m6+xK+AAXHJEUnGeSXTedM0pehf1mPg4v8ts8F/rPAX5vBtuarrbbtbi8HXu8rAz+V6hlXim1omKrb+R6n3L58aMdLgKFJjBIUXyq0Pq3PnX+fdb89yBn5uj6HxTFG5bhJj7Zei8wpLvFoh1U5jzDucDkc6MMBGlC34OFczPKOU1sFF5Rge3pnYJ9AeI9ZOI4otnMH5frfL6Ez86P4JlyPfYoZDOL2BHz2A3WkTg1Q6LxixB2ry6GHdLWgLT3ZvlDAdiC/tT7BGft60ZMGkJrITbBs/KGH745LdNbyZ2cEmU31HFSkut/7Wfipy0ceIq5la4JTGFCY1z/DySlXXP45gxZItrsIzftttg8b3EuJMwYnSkMJy+s43B8UpvsQ4mHKrFbbCCybbJV1P6S6XwMFsQc6wJf5iXsEjUh/EYQJkkrkg9EZzCB8pVOIU+Hj0ovSBSSsgLB+ewGsAF5EoSlcMfESTR0lw6FN6qpIuAysKeSA1SDzEN2TGpO6KjGh7F9RF+khrkFjoPp1RMi1IyRRm0StULmjJ9As67d2e5O7ZzaJvh04oZdEZI5rgmcoV/Uwriy68qN9lOo3db/TxNeXjOh3Q02k2v+9QjTXxvIsJu/lrm0mQgXmHT4+vAxKSNNLBBwGSZNjPPMkcCM2p3mqJQoK2PVkJzKHSHTJzkp9jJTtEmyD/mXRfaa1UEkvtTkRX80p5OP2ooml7bEh/WQtoQx15MgzDMAzDMAzDMAzDMAzDMAzDMAzzV/wEre4wbDMIUfgAAAAASUVORK5CYII='}/>
                <Text mt={'3'} fontSize={'14'} color={'green'}>Change of plans? No problem. You can cancel for a full refund before {searchdata.checkin}</Text>
               </Box>
             </Box>
            <Button mt={'5'} onClick={handlechages} colorScheme='yellow' bgGradient='linear(to-r, yellow.200, yellow.500)' size='lg'>
              Complete booking <ChevronRightIcon/>
         </Button>
         <Box mt={'5'} display={'flex'}>
                 <Box><Img w={'8'}  src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8jHyAAAAAgHB0GAAAnIiOzs7Pn5uYKAAC8u7vFxMQOBQjLysuenZ0VEBGrqqt8ensaFRb09PTV1NUTDQ87ODnv7+8uKiuHhoZLSEmXlpZaWFne3t5VUlMMAAUZFBZhX19samtvbm6Bf4BCP0CjoqI1MzNXVVZLSUleXV3Z2dmrI868AAAFCUlEQVR4nO2de5uiLBiH14fKyrQwO0zTuZlm6/t/wN3ed/YSnVTAAzDzu/+H67kFAZHDr18AAAAAAAAAAAAAAAAAAAAAAAAA+Ic/n3xl7psOqxHiyeaWUBHJcTOJTYdYh3jwGlHAmVcE4wElt4GrktvZgQ7Fdqkl8dnWdLAabI8UVet9SkZ0cs0xntFBUu9/DjRzqq4OgkTJ70FCI9Nhy3Mm2fopwujsSDH6i0DD70GwcKKLnAdcU9Dz+HBuOvxqxlo19B+MxqYFqpg8E2Q8SoI8SfRsKGC94vyrIO/1VrvZJsyzme1W1PtSo5ndFXXJcoIsoNuguPnwBzcK8knYssOIVXnLFck+CavCXYbBPuvIF53EqsVlmAn1QBupZJtedvwzXLccpzYTygRKO9nezd/lUk5ajVOfVaa2kUpJrDOK7NpajLXY9DKCU6XE04wihS3FWItlplFUHkaPREUW2NiersXRqGIJPsiUYmBhY7MUv3e1WsPLXijEnn2fGe9CT8HftLJYCL3p8L3h+OrTF4qQ9KYktkI9ZauG46vNXIhO+yUSX2WybXi6TqctWKL7Di2FqbnEtram30hs4nOybHTqC5WU9KciGsqmDQbpeIZ/1MjnNW1Oe4PGomuCWZS28+qdfco07XOiWWPRNcEuffa1apfQYfDfjUXXBGlDU7Mji4SMbBrWxOmjPxxr5XRMK4NVo2+hctXsx4T+wqrGVPi6D+p92oXpsMaqUc04NazZyAuNqVVzGYJhzT9IQsdq1dwwDOWBoSlgKA8MTQFDeWBoChjKA0NTwFAeGJoChvLA0BQ/ynA/9WuwfA+aelZNMjpfhR/A+8LdFTII/0hZfxdaMWUaejJ7DnRgfE8n4473Va0Vs5VEkmvjWmPQrt8DOpoUHLUv6HlDg4r3LgT/luLFmOFCf1W+mqKpPxghVQfXCKxvyNDrpI4+MNT5j7sqQs/jRyOGF/XdW9qQEcNrZ5XU1P/g7iqpqRexS0MzC6RgCEMYwtBSQ8Z5yRkLrhuyiKi/O35ciRJFSzcMg+Fs/Lmgcr7uq31aumDIe+vMasopj6oTuWSYLPK7TJbHXnUydwyDZ8vb1/I5WG8Y7Z7mIK9ou2Hhku2b7Ltou2HhTNJyL9miWm54OBXmEQ6rkztgSPfCPGLJAY7dhqxsv+VM7k2027B0f8JILhe7DUv/5frfwrBsnizOnxXipGHpT065OUnLDcv2Pcer72BYWkvl/pDbbdgrm839Fi1N6WbQgdwnlN2GpXsuj3I/We02LOsQfcnD6yw35C+Fecj+obPcsPgsl7t0a2W5YWGXKNcZumDIvKe7lj+kp9usN/T46mspxh/yZ2Tab+jxIB/jZKUwYeqAocfotzhbsz0pTXq7YPi3GMUm9ayW2g3DzJkgkrMXMIQhDGEIQxjCEIYwhCEMYfgDDcWDzs5q19A4Yni4pYkVF/o7YihMfocKK75cMmT8U3GqKOiMocfodToahS/KSZ0x9Dy+J9K4aschQ01gCEMYwhCGMIThTzA0cxrPS0cnKvxnaOQi1o3uVZXqMGZCMHPxSsuYuichf1Nee5Ss9m+Vzo6NiG7VwbTDqZtzI9jQ2GFR8aqTekoG72Pxhx0omr1Iz7+23WVwjUvqmuUif4W6BozeDDWjAvdTQAlnLXDY05sdVyItB5eXVb9xFqfQfPkBAAAAAAAAAAAAAAAAAAAAAAAAAAAA3OMPXIddF8y+rvwAAAAASUVORK5CYII='}/>
                 </Box>
                 <Box ml="2">
                    <Text mt='1' fontSize={'14'}>We use secure transmission and encrypted storage to protect your personal information.</Text>
                    <Text mt='3' fontSize={'14'}>This payment will be processed in India. This does not apply when the travel provider (airline/hotel/rail, etc.) processes your payment.</Text>
                    
                 </Box>
            </Box>
             </Box>
             
            </Box>
            
            
            <Box w={'35%'}   >
                <Box  boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' ml={'4'}  borderTop={'1px solid white'}>
                  <Img  src={prasdata.img}/>
                  <Text pl={4} fontWeight={'bold'} fontSize={"16"}>{prasdata.titile}</Text>
                  <Text pl={4} pt={2} fontSize={"16"}>{prasdata.rating+" "+prasdata.wonder} {prasdata.reviews}</Text>
                  <Text pl={4} fontSize={"14"}>Guests rated this property {prasdata.rating} for cleanliness</Text>
                  <Box display={'flex'}>
                    <Text pl={4} pt={4} fontSize={'14'} fontWeight={'bold'}>1 Room:</Text>
                    <Text pl={2} pt={4} fontSize={"14"}>Superior Room, 1 King Bed, Non Smoking, Lake View</Text>
                  </Box>
                  <Box display={'flex'}>
                    <Text pl={4} pt={4} fontSize={'14'} fontWeight={'bold'}>Check-in:</Text>
                    <Text pl={2} pt={4} fontSize={"14"}>{searchdata.checkin}</Text>
                  </Box>
                  <Box display={'flex'}>
                    <Text pl={4} pt={4} fontSize={'14'} fontWeight={'bold'}>Check-out: </Text>
                    <Text pl={2} pt={4} fontSize={"14"}>{searchdata.checkout}</Text>
                  </Box>
                  <Text pl={4} pt={2} pb={'5'} fontSize={"14"}>1-night stay</Text>
                </Box>
                <Box mt={'5'} boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' ml={'4'} p={'4'}  borderTop={'1px solid white'}>
                <Text fontSize={'18'} fontWeight={'bold'}>Price details</Text>
                <Box mt='4' bg={'#2B4C59'} h="0.5"></Box>
                <Box>
                    <Box mt={'5'} display={'flex'} justifyContent={'space-between'}>
                       <Text >1 room x 1 night</Text>
                       <Text mr={'4'}>₹{prasdata.price}</Text>
                    </Box>
                    <Box mt={'5'} display={'flex'} justifyContent={'space-between'}>
                       <Text >Taxes</Text>
                       <Text mr={'4'}>₹2,700.00</Text>
                    </Box>
                </Box>
                <Box mt='4' bg={'#2B4C59'} h="0.5"></Box>
                <Box pb="5">
                    <Box mt={'5'}  display={'flex'} justifyContent={'space-between'}>
                       <Text fontWeight={'bold'} fontSize={'16'} >Total</Text>
                       <Text fontWeight={'bold'} fontSize={'16'} mr={'4'}>₹{prasdata.priced}</Text>
                    </Box>
                    <Box mt={'2'}  display={'flex'} justifyContent={'space-between'}>
                       <Text color={'green'} fontWeight={'bold'} fontSize={'16'} >Pay now</Text>
                       <Text color={'green'} fontWeight={'bold'} fontSize={'16'} mr={'4'}>₹0.00</Text>
                    </Box>
                    <Box mt={'2'}  display={'flex'} justifyContent={'space-between'}>
                       <Text  fontSize={'16'}  >Pay at property</Text>
                       <Text fontSize={'16'}  mr={'4'}>₹{prasdata.priced}</Text>
                    </Box>
                </Box>
                </Box>
        </Box>
        </Box>
        <Footer/>
        </div>
    )
}
export default Booking