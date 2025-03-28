const $G = { _components: ['EVT', 'DB', 'DAT', 'NET', 'GUI', 'POL', 'GTF'],
_eventMap: {
	'.g_tooltip_button':			{ click:e => $GUI.tooltipButtonClick(e) },
	'.g_file':						{ change:e => $NET.upload(e) },
	'.g_gtf_icon':					{ click:e => $GTF.iconClick(e) },
	'#g_issue_input':				{ keyup:e => $GUI.issueKeyUp(e) },
	'#g_parser_format':				{ change:e => $GUI.parserChangeCheck('format') },
	'#g_parser_profile':			{ change:e => $GUI.parserChangeCheck('profile') },
	'#g_parser_structure':			{ change:e => $GUI.parserChangeCheck('structure') },
	'#g_gtf_column_group':			{ input:e => $GTF.columnUpdate(1000) },
	'#g_gtf_filter_group':			{ input:e => $GTF.filterUpdate() },
	'#g_menu':						{ scroll:e => $MENU.scroll(e) },
	'#g_gtf_filter_value_text':		{
		focus:e			=> $GTF.filterTextFocus(true),
		blur:e			=> $GTF.filterTextFocus(false),
		input:e			=> $GTF.filterPlaceholderUpdate(null)
	},
	'#g_gtf_editor_data':		{
		mousedown:e		=> $GTF.mouse.down(e),
		mousemove:e		=> $GTF.mouse.move(e),
		mouseleave:e	=> $GTF.mouse.up(e),
		mouseup:e		=> $GTF.mouse.up(e)
	}
},
_clickMap: {
	'g_top':_						=> $GUI.topClick(),
	'g_error':_						=> $GUI.reset(_.el, 'g_error 0s normal forwards'),
	'g_start_button':_				=> $GUI.appMode(true),
	'g_start_button_alt':_			=> $GUI.appMode(true),
	'g_login_button':_				=> $GUI.login(false),
	'g_signup_button':_				=> $GUI.login(false),
	'g_signup_button':_				=> $GUI.login(false),
	'g_recovery_button':_			=> $GUI.recovery(),
	'g_signup_link':_				=> $GUI.signUpLink(false),
	'g_recovery_link':_				=> $GUI.signUpLink(true),
	'g_captcha_image':_				=> $GUI.captchaUpdate(),
	'g_verify_button':_				=> $NET.verifySend(),
	'g_account_save':_				=> $GUI.accountSave(),
	'g_logout_button':_				=> $GUI.logout(),
	'g_billing_container':_			=> $GUI.billingClick(_.x),
	'g_modal':_						=> $GUI.modal(_.x),
	'g_menu':_						=> $GUI.menuSelect(_.x),
	'g_menu_parser_capable':_		=> $GUI.parserMenuSelect(_.x),
	'g_menu_parsers':_				=> $GUI.parserSet(_.x),
	'g_menu_issues':_				=> $GUI.issueSet(_.x),
	'g_menu_support':_ 				=> $GUI.supportOpen(false, _.x),
	'g_about_links':_				=> $GUI.supportOpen(false, _.x),
	'g_about_play':_				=> $GUI.aboutVideo(true),
	'g_about_play_alt':_			=> $GUI.aboutVideo(true),
	'g_tooltip_walk':_				=> $GUI.tooltipWalk(),

	'g_issue_send_button':_			=> $GUI.issueSend(_.x),
	'g_issue_close_button':_		=> $GUI.issueDelete(_.x),
	'g_issue_attach_button':_		=> $GUI.issueAttach(),
	'g_issue_attachment_download':_	=> $GUI.download('/upload/'+_.x),
	'g_contact_issue':_				=> $GUI.supportClose(false) || $DAT.parserIssue($V('g_contact_issue_type')),

	'g_parser_info_issue':_			=> $DAT.parserIssue(_.x),
	'g_parser_info_save':_			=> $DAT.parserSave(_.x, false),
	'g_parser_info_delete':_		=> $GUI.parserDelete(_.x),
	'g_parser_info_clone':_			=> $DAT.parserSave(_.x, true),
	'g_parser_info_parser_id':_		=> $GUI.parserIdCopy(_.x),

	'g_parser_map_save':_			=> $GUI.mapSave(_.x),
	'g_parser_map_delete':_			=> $GUI.mapDelete(),
	'g_parser_map_revert':_			=> $GUI.mapRevert(),
	'g_parser_map_add':_			=> $GUI.mapAdd(),

	'g_parse_link_has_download':_	=> $GUI.download(_.x), 
	'g_parse_has_download':_		=> $GUI.download(_.x), 
	'g_parse_issue':_				=> $DAT.parserIssue(_.x),
	'g_parse_delete':_				=> $GUI.parseDelete(_.x),
	'g_parse_page_change':_			=> $GUI.parsePage(_.x),

	'g_support_select':_			=> $GUI.supportSelect('g_support_select_'+_.x+'_header'),
	'g_support_checkbox_container':_=> $GUI.supportOpen(true, 'terms'),
	'g_support_button_agree':_		=> $GUI.supportClose(true),
	'g_support_button_close':_		=> $GUI.supportClose(false),

	'g_snippets_menu':_				=> $GUI.snippetSelect(_.x),
	'g_snippet_copy_button':_		=> $GUI.snippetCopy(),

	'g_gtf_map_delete':_			=> $GTF.mapDelete(_.x),
	'g_gtf_map_prev':_				=> $GTF.mapShow(_.x),
	'g_gtf_map_next':_				=> $GTF.mapShow(_.x),

	'g_gtf_zoom_in_button':_		=> $GTF.zoom(parseInt(_.x)),
	'g_gtf_zoom_out_button':_		=> $GTF.zoom(parseInt(_.x)),
	'g_gtf_widescreen_button':_		=> $MENU.toggle(),

	'g_gtf_column_up_button':_		=> $GTF.columnShift(parseInt(_.x)) && $GTF.columnUpdate(),
	'g_gtf_column_down_button':_	=> $GTF.columnShift(parseInt(_.x)) && $GTF.columnUpdate(),
	'g_gtf_column_delete':_			=> $GTF.columnDelete(),

	'g_gtf_editor_data':_			=> $GTF.click(_),

	'g_gtf_filter_activate':_		=> $E('g_gtf_filter_enabled').click(),

	'g_gtf_rule_edit':_				=> $GTF.ruleEdit(_),
	'g_gtf_pattern_edit':_			=> void(0),

	'g_gtf_column_color_choices':_	=> $GTF.columnSelect(_.x),
	'g_gtf_column_color_container':_=> $GTF.columnToggle(),
	'g_gtf_filter_value_container':_=> $GTF.filterValueToggle(),
	'g_gtf_filter_value_choices':_	=> $GTF.filterValueSelect(_.x),
	'g_gtf_mode_group':_			=> $GTF.setMode(_.x)
},
_keyMap: {
	'ARROWLEFT':	'g_gtf_map_prev',
	'ARROWRIGHT':	'g_gtf_map_next',
	'=':			'g_gtf_zoom_in_button',
	'+':			'g_gtf_zoom_in_button',
	'_':			'g_gtf_zoom_out_button',
	'-':			'g_gtf_zoom_out_button',
	'0':			'g_gtf_widescreen_button',
	'O':			'g_gtf_view_overall_button',
	'G':			'g_gtf_view_group_button',
	'S':			'g_gtf_view_single_button',
	'E':			'g_gtf_view_exclude_button',
	'F':			'g_gtf_filter_enabled_container'
},


/*************************************************************************************************\
\*******  SHORTHAND / COMMON  *************************************************  [ $?.* ]  *******/
A: query => (_A = $D.querySelectorAll(query)), _A: null,
B: id => (_B = $D.getElementById(id).getBoundingClientRect()), _B: null,
C: className => (_C = $D.getElementsByClassName(className)), _C: null,
D: document,
E: id => (_E = $D.getElementById(id)), _E: null,
F: (id, a) => (_F = ($DAT.FRAGMENTS[id]?$DAT.FRAGMENTS[id]:($DAT.FRAGMENTS[id]=($E(id)?_E.innerHTML:id).split('@'))).forEach((x,i)=>a&&a.splice(i*2,0,$DAT.FRAGMENTS[id][i]))||(a?a:$DAT.FRAGMENTS[id]).join('')), _F: null,
H: string => (_H = (_H=$D.createElement('p'))&&((_H.textContent=string)) ? _H.innerHTML : ''), _H: null,
I: (array, item) => (_I = array.indexOf(item)), _I: -1,
K: (id, value) => (_K = $D.getElementById(id)) && (typeof value=='undefined' ? (_K&&_K.checked?_K.value:null) : (_K?_K.checked=!!value:null)), _K: null,
L: (count, func) => [...Array(count)].forEach(func),
M: (match, string) => (_M = string && string.match(match)), _M: null,
N: (number, digits) => number.toLocaleString(undefined, { minimumFractionDigits: digits,  maximumFractionDigits: digits }),
P: (count, total) => Math.round(count / total * 100),
Q: query => (_Q = $D.querySelector(query)), _Q: null,
R: array => array[Math.floor(Math.random()*array.length)],
S: (array, match) => (_S = array.split(match)), _S: null,
T: (tagName, ctx) => (_T = (ctx?ctx:$D).getElementsByTagName(tagName)), _T: null,
U: array => array.filter((x,i,a) => array.indexOf(x)==i),
V: (id, value) => (_V = $D.getElementById(id)) ? (_V.type=='checkbox' ? $K(id,value) : (typeof value=='undefined' ? (_V[typeof _V.value=='undefined'?'innerHTML':'value']) : (_V[typeof _V.value=='undefined'?'innerHTML':'value']=value))) : null, _V: null,
W: window,
X: x => (_X = x?.dataset?.x), _X: null,
Y: y => (_Y = y?.dataset?.y), _Y: null,
Z: (keys, values) => keys.reduce((obj, key, index) => ({...obj, [key]:values[index]}), {}),

/*************************************************************************************************\
\*******  APP ENTRY POINT (main)  ******************************************  [ $G.LOAD ]  *******/
LOAD: e => {
	if(location.protocol == 'http:')
		location.protocol = 'https:';
	for(let k of Object.keys($G))
		window[k[0]=='_'?k:('$'+k)] = $G[k];
	_components.forEach(c => $G[c].setup());
	$D.childNodes.forEach(c => c.nodeType==Node.COMMENT_NODE ? console.log(c.nodeValue) : null);
},


/*************************************************************************************************\
\*******  GLOBAL EVENTS (automatically hooked)  *****************************  [ $EVT.* ]  *******/
EVT: {
	DOCUMENT: [ 'click', 'keydown', 'mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'touchdistance', 'dragover', 'dragleave', 'drop' ],
	WINDOW: [ 'focus', 'resize', 'hashchange', 'popstate', 'pageshow' ],
	TOUCH: { points:0, startDistance:0, startZoom:0 },

	setup: () => {
		$EVT.DOCUMENT.forEach(k => $D.addEventListener(k, $EVT[k]));
		$EVT.WINDOW.forEach(k => $W.addEventListener(k, $EVT[k]));
		for(let query of Object.keys(_eventMap)) {
			if(!$A(query)) continue;
			for(let a=0; a < _A.length; a++) {
				for(let e of Object.keys(_eventMap[query]))
					_A[a].addEventListener(e, _eventMap[query][e]);
			}
		}
		if(location.hash)
			$EVT.hashchange();
		history.pushState({}, '');
	},
	click: e => {
		let dataRef=null, x='', y='', ref='', refList=Object.keys(_clickMap), el=(e&&e.target?e.target:e);
		if(!el) return;
		$GUI.tooltipClear(el.className && el.className.match && el.className.match('tooltip'));
		for(let next=el; !!next.parentElement; next=next.parentElement) {
			if(!ref) {
				for(let c in refList) {
					if(next.id != refList[c] && !next.classList.contains(refList[c]))
						continue;
					ref = refList[c];
					el = next;
					break;
				}
			}
			if(!x && typeof next.dataset=='object' && typeof $X(next)=='string')
				x = _X;
			if(!y && typeof next.dataset=='object' && typeof $Y(next)=='string')
				y = _Y;
		}

		if($Q('.g_gtf_rule_active') && ref != 'g_gtf_pattern_edit')
			$GTF.ruleEdit(null);
		if(_clickMap[ref])
			_clickMap[ref]({'e':e,'el':el,'x':x,'y':y});
		if(!_clickMap[ref] || ref == 'g_gtf_editor_data') {
			$GTF.columnToggle(false);
			$GTF.filterValueToggle(false);
		}
	},
	keydown: e => {
		if(e && e.target && ($GUI.MENU!='parsers' || $GUI.PARSER_MENU!='map' || $I(['INPUT','TEXTAREA'],e.target.tagName) >= 0 || e.target.isContentEditable))
			return;
		let el='', keyNum=parseInt(e.key);
		if(keyNum > 0 && $isVisible($E('g_gtf_column_color_container'))) {
			$GTF.columnToggle(true);
			$GTF.columnSelect(keyNum-1);
			$GTF.columnToggle(false);
			$E('g_gtf_column_name_text').blur();
		}
		else if(!(el=_keyMap[e.key.toUpperCase()]))
			return;
		if(el && $E(el) && $isVisible(_E))
			_E.click();
		e.preventDefault();
	},
	mousedown: e => {
		for(let el=(e&&e.target?e.target:e),next=el; !!next.parentElement; next=next.parentElement) {
			if(next.id!='g_parser_scrollbar')
				continue;
			$GUI.tooltipClear(true);
			$GTF.SCROLLING = true; 
			$GTF.scrollChange(e);
			break;
		}
	},
	mouseup: e => $GTF.SCROLLING = false,
	mousemove: e => $GTF.SCROLLING ? $GTF.scrollChange(e) : null,
	touchstart: e => {
		if(($EVT.TOUCH.points=e.touches.length) >= 2) {
			$EVT.TOUCH.startDistance = $EVT.touchdistance(e);
			$EVT.TOUCH.startZoom = $GTF.zoomGet();
		}
		else
			$EVT.mousedown(e);
	},
	touchmove: e => {
		if($EVT.TOUCH.points >= 2) {
			const d=$EVT.touchdistance(e), dir=d>$EVT.TOUCH.startDistance, dist=Math.round(dir?(d/$EVT.TOUCH.startDistance):-($EVT.TOUCH.startDistance/d),0);
			if($GUI.MENU=='parsers' && $GUI.PARSER_MENU=='map')
				$GTF.zoomSet($EVT.TOUCH.startZoom + dist);
			else if(dist)
				$MENU.toggle(dist>0);
		}
		else
			$EVT.mousemove(e);
	},
	touchend: e => {
		if($EVT.TOUCH.points == 1)
			$EVT.mouseup(e);
		$EVT.TOUCH.points = $EVT.TOUCH.startDistance = $EVT.TOUCH.startZoom = 0;
	},
	touchcancel: e => $EVT.touchend(e),
	touchdistance: e => Math.hypot(e.touches[0].pageX-e.touches[1].pageX, e.touches[0].pageY-e.touches[1].pageY),
	focus: e => $GUI.aboutRestart(false),
	resize: e => $GUI.stopSplash() || $MENU.hideIfSmallView(true) || $GTF.scrollChange(null) || $GTF.zoomAuto(true),
	hashchange: e => $M(/#?([^=]+)=(.+)/, location.hash) ? $DAT.hashTask(_M[1], _M[2]) : null,
	dragover: e => $E('g_body').classList.add('g_drop_hover') || e.preventDefault(),
	dragleave: e => $E('g_body').classList.remove('g_drop_hover'),
	drop: e => {
		e.preventDefault();
		if($GUI.BUSY)
			return;
		$E('g_body').classList.remove('g_drop_hover');
		$E('g_file').files = e.dataTransfer.files;
		$GUI.saveChangesCheck(() => $NET.upload($E('g_file')));
	},
	pageshow: e => e.persisted && $GUI.MENU=='billing' ? $NET.billing() : null,
	popstate: e => {
		if($GUI.isNoMenu())
			$MENU.toggle(true);
		else if(!$GUI.BUSY)
			return;
		history.pushState({}, '');
	}
},


/*************************************************************************************************\
\*******  GUI & GENERAL VIEW LOGIC  *****************************************  [ $GUI.* ]  *******/
GUI: {
	MENU:'', PARSER_MENU:'', BUSY:false, MODAL:null, SWAGGER:null,

	setup: () => {
		$D.body.classList[$isMobile()?'add':'remove']('g_mobile');
		$POL.start('loaded', 4);
		$GUI.menuSelect('about');
		if($DB.get('auth'))
			$D.body.classList.add('g_has_auth_token');
		setTimeout(() => {
			$GUI.locked(false);
			$GUI.aboutRestart(true);
			if($NET.SYNC_RESPONSE) {
				$NET.loginResponse($NET.SYNC_RESPONSE);
				$NET.SYNC_RESPONSE = null;
			}
		}, 1000);
	},
	debug: msg => $V('g_debug', $H(msg)) && (_V.style.display='block'),
	error: (msg, secs) => {
		if(msg && msg.match(/captcha/i))
			$GUI.captchaUpdate();
		if($GUI.appMode() && $V('g_error', $H(msg)));
			$GUI.reset(_V, `g_error ${secs?secs:$minMax(msg.length/15,5,10)}s normal forwards`);
	},
	logout: () => $GUI.confirm('Are you sure you want to logout?', $DAT.logout),
	supportOpen: (confirm, select) => {
		$E('g_support_checkbox').checked = false;
		$E('g_support_button_agree').style.display = (confirm?'inline':'none');
		if(select)
			$GUI.supportSelect('g_support_select_'+select+'_header');
		$GUI.reset('g_support', 'g_fade_in 0.5s ease forwards');
	},
	supportClose: confirm => {
		$E('g_support_checkbox').checked = confirm;
		$GUI.reset('g_support', 'g_fade_out 0.25s ease forwards');
	},
	supportSelect: id => $E(id) ? _E.scrollIntoView({behavior:'smooth'}) : null,
	alert: (text) => $GUI.confirm(text),
	confirm: (text, func) => {
		$E('g_modal').className='g_modal_'+(($GUI.MODAL=func)?'yn':'ok');
		$GUI.reset(_E, 'g_fade_in 0.5s ease forwards');
		$V('g_modal_text', $H(text).replace(/\n/g,'<br />'));
	},
	modal: answer => {
		if(!answer)
			return;
		$GUI.reset('g_modal', 'g_fade_out 0.25s ease forwards');
		if($GUI.MODAL && answer=='yes')
			$GUI.MODAL();
		$GUI.MODAL = null;
	},
	locked: explicit => {
		if(typeof(explicit)=='boolean')
			$E('g_top').classList[explicit?'add':'remove']('g_top_locked');
		return($E('g_top').classList.contains('g_top_locked'));
	},
	busy: active => ($GUI.BUSY!=active) && $GUI.reset('g_busy', `g_fade_${active?'in':'out'} 0.5s ease forwards`) && ($GUI.BUSY=active),
	beep: callbackError => {
		if(typeof callbackError == 'boolean' || !$E('g_support_audio') || !_E.play)
			return;
		_E.currentTime = 0;
		_E.play().then(() => $GUI.beep(false)).catch(err => $GUI.beep(true));
	},
	notify: message => $W['Notification'] && Notification.requestPermission ? Notification.requestPermission().then(permission => permission === 'granted' ? new Notification(message, {icon: $A('link') && Array.from(_A).find(l => l.rel=='icon').href}) : null) : null,
	loadState: () => $DAT.LOGGED_IN && $DAT.LOAD_STATE && $A('#g_menu *').forEach(x => $DAT.LOAD_STATE&&$X(x)==$DAT.LOAD_STATE&&x.click ? ($DAT.LOAD_STATE=x.click()) : null),
	stopSplash: () => $E('g_top').classList.add('g_top_complete') || $GUI.aboutRestart(true),
	reset: (idOrElement, animation) => {
		const el=(typeof idOrElement=='string'?$E(idOrElement):idOrElement), ani=(animation?animation:$W.getComputedStyle(el).animation);
		if(!el)
			return(false);
		el.style.animation = 'none';
		void el.offsetHeight;
		el.style.animation = ani;
		return(true);
	},
	download: path => {
		if($altKey())
			$W.open($NET.URL + path + '?' + $DB.get('auth'));
		else
			$NET.download(path);
	},
	appMode: active => {
		if(typeof active == 'undefined' || active == $D.body.classList.contains('g_app_mode'))
			return($D.body.classList.contains('g_app_mode'));
		$D.body.classList[active?'add':'remove']('g_app_mode');
		$GUI.menuSelect(active?'account':'about');
	},
	topClick: () => {
		if($GUI.locked())
			return;
		else if(!$E('g_top').classList.contains('g_top_complete'))
			$GUI.stopSplash();
		else if($GUI.isNoMenu())
			$MENU.toggle(true);
		else if(!$GUI.appMode())
			$GUI.appMode(true);
	},
	loggedIn: show => $D.body.classList[show?'add':'remove']('g_logged_in') || $D.body.classList[show?'remove':'add']('g_logged_out') || ($DAT.LOGGED_IN=show),
	isNoMenu: () => $D.body.classList.contains('g_app_no_menu'),
	signUpLink: recovery => {
		$E('g_login_container').classList[recovery?'add':'remove']('g_login_recovery');
		$DB.clear();
		$GUI.captchaUpdate();
		$E('g_login_only').style.display='none';
		if(!recovery)
			$GUI.reset('g_login_signup', 'g_login_signup 0.5s normal forwards');
		$E('g_login_container').reset();
	},
	captchaUpdate: () => ($E('g_captcha_image').src=$NET.URL+'/user/captcha?'+$epochNow()),
	login: passive => {
		if(!$V('g_username'))
			$GUI.alert("No username provided to sign in with.");
		else if(!$V('g_password'))
			$GUI.alert("No password provided to sign in with.");
		else if($E('g_login_only').style.display != 'none')
			$NET.login(passive);
		else if(!$V('g_password_again'))
			$GUI.alert("You must re-type your password to create an account.");
		else if($V('g_password')!=$V('g_password_again'))
			$GUI.alert("Sorry, your passwords don't match.");
		else if(!$V('g_email'))
			$GUI.alert("A email address is required to create an account.");
		else if(!$V('g_captcha'))
			$GUI.alert("The human check (6 letter captcha) is required to create an account.");
		else if(!$E('g_support_checkbox').checked)
			$GUI.alert("Our terms and conditions must be agreed to create an account.");
		else
			$NET.signUp({'password':$V('g_password'), 'email':$V('g_email'), 'captcha':$V('g_captcha')}, passive);
	},
	recovery: () => {
		if(!$V('g_username'))
			$GUI.alert("No username provided to recover.");
		else if(!$V('g_captcha'))
			$GUI.alert("The human check (6 letter captcha) is required to send a recovery email.");
		else
			$NET.signUp({'recovery':true, 'captcha':$V('g_captcha')}, false);
	},
	accountSave: () => {
		const pass1=$V('g_account_password').trim(), pass2=$V('g_account_password_confirm').trim();
		if((pass1 || pass2) && pass1 != pass2)
			$GUI.alert("The passwords don't match, make sure the confirm password matches.");
		else {
			let options=0
			$A('#g_account_container input[type="checkbox"]').forEach(e => options += e.checked ? parseInt(e.value) : 0);
			$NET.accountSave({
				'email': $V('g_account_email'),
				'password': pass1,
				'contact': $V('g_account_contact'),
				'quota': $V('g_account_quota'),
				'options': options
			});
		}
	},
	tooltipClear: clicked => {
		$A('.g_tooltip').forEach(e => {
			if(!e.parentElement || !e.parentElement.classList.contains('g_tooltip_onscreen'))
				e.remove();
			else if(clicked)
				e.parentElement.remove();
		});
	},
	tooltipWalk: on => {
		if(!$E('g_tooltip_walk'))
			return;
		else if(!_E.classList.contains('g_tooltip_walk_hide')) {
			_E.classList.add('g_tooltip_walk_hide');
			$D.body.classList.add('g_tooltip_show')
			$POL.start('tooltips', 1);
		}
		else if(!on) {
			_E.remove();
			$D.body.classList.remove('g_tooltip_show')
			$POL.stop('tooltips');
		}
	},
	tooltipShow: el => {
		if($X(el) && !el.childNodes.length)
			setTimeout(() => {
				const lines=_X.split('|'), style=lines.shift();
				el.insertAdjacentHTML('beforeend', `<div class="g_tooltip g_tooltip_${style.match('right')?'right':'left'}"><div class="g_tooltip_text" style="${$H(style)}"><div class="g_tooltip_box">${$H(lines.join("\n")).replace(/\{/g,'<b>').replace(/\}/g,'</b>')}</div><div class="g_tooltip_close">CLOSE</div></div></div>`)
				if(el.childNodes.length)
					$GUI.reset(el.childNodes[0], 'g_fade_in 0.35s ease 0s 1 normal forwards');
		}, 10);
	},
	tooltipButtonClick: e => $GUI.tooltipShow(e.target),
	tooltipOnScreenUpdate: () => {
		if($C('g_tooltip').length || !$A('.g_tooltip_onscreen'))
			return;
		for(const el of _A) {
			if(!$isVisible(el))
				continue;
			$GUI.tooltipShow(el);
			break;
		}
	},
	aboutVideo: start => {
		$E('g_about_demo').className = (start?'g_about_demo_show':'');
		$E('g_about_video')[start?'play':'pause']();
	},
	aboutRestart: (scrollToTop, noPaper) => {
		if(scrollToTop)
			$scrollToTop($E('g_content_about'), true);
		if(!$D.getAnimations) return;
		$D.getAnimations().forEach(a => a.animationName && a.animationName.match(noPaper ? /^g_about_doc(?!_text)/ : /^g_about_doc/) && a.cancel && (a.cancel()||a.play()));
		$POL.start('about', 10);
	},
	menuSelect: item => $GUI.saveChangesCheck(() => { 
		$MENU.hideIfSmallView();
		if(!$E('g_content_'+item) || $GUI.MENU==item) return;
		$A('#g_content > div').forEach(x => x.classList.remove('g_content_selected'))
		_E.classList.add('g_content_selected');
		$E('g_content').className = 'g_content_menu_' + ($GUI.MENU=item);
		$MENU.selectedUpdate();
		if($MENU[$GUI.MENU])
			$MENU[$DAT.saveState($GUI.MENU)]();
		$GUI.aboutVideo(false);
	}),
	parserMenuSelect: item => $GUI.saveChangesCheck(() => { 
		if(!$E('g_parser_'+(item?item:(item='info'))))
			return;
		$MENU.hideIfSmallView();
		$A('#g_parser_content > div').forEach(x => x.classList.remove('g_parser_selected'))
		_E.classList.add('g_parser_selected');
		if($I($DAT.PARSER_STATES_LOADED, ($GUI.PARSER_MENU=item)) < 0) {
			$GUI.tooltipClear(true);
			$DAT.PARSER_STATES_LOADED.push($GUI.PARSER_MENU);
			$GUI.updateFileInputs();
			switch($GUI.PARSER_MENU) {
				case 'info':
					$E('g_parser_info_form').scrollTop = 0;
					break;
				case 'map':
					$NET.map($DAT.PARSER);
					break;
				case 'parse':
					$E('g_parses_list').scrollTop = 0;
					if($DAT.TEMP_STATES['push_attachment'] && !$DAT.TEMP_STATES['follow_only'])
						$NET.parseFromAttachment($DAT.PARSER, $DAT.TEMP_STATES['push_attachment']);
					else
						$NET.parses($DAT.PARSER);
					$DAT.TEMP_STATES['push_attachment'] = null;
					break;
			}
		}
		$GUI.parserStateSelectedUpdate();
		$GTF.scrollChange(0);
	}),
	parserReadOnly: readonly => $E('g_parser_info_form').querySelectorAll('input, select, textarea').forEach(x => x.disabled = readonly) || $E('g_content_parsers').classList[readonly?'add':'remove']('g_parser_readonly') || ($E('g_parser_info_save').disabled=readonly),
	issueUpdateSendButton: () => $E('g_issue_send_button').classList[!$E('g_issue_input').value?'add':'remove']('g_disabled'),
	issueKeyUp: e => {
		e.target.value = e.target.value.trimLeft();
		$GUI.issueUpdateSendButton();
		if(e.key=='Enter'&&$DAT.ISSUE)
			$GUI.issueSend($DAT.ISSUE,e.target.value)
	},
	issueDelete: id => $GUI.confirm('Are you sure you want to close this issue?', () => { $DAT.issueDelete(id); }),
	issueSend: id => {
		if($E('g_issue_input').value)
			$NET.issueSend(id?id:$DAT.ISSUE, _E.value);
		$E('g_issue_input').value = '';
		$GUI.issueUpdateSendButton();
	},
	issueAttach: () => $E('g_issue_file').click(),
	issueSet: id => $GUI.saveChangesCheck(() => { 
		if(!id || id[0] != '/')
			return;
		$DAT.ISSUE_LAST = 0;
		$DAT.issueSet(id);
		$GUI.issueUpdateSendButton();
	}),
	issueDisplayMessage: (data, reset) => {
		if($E('g_issue_content') && reset)
			_E.innerHTML='';
		let html = (data['response']?'<b class="g_from">Gristle':'<b class="g_to">' + ($DB.get('user')?$DB.get('user'):'You')) + ' @ '+$dateDisplay(data['ts'])+':</b>';
		if(data['upload_id']) {
			const options = ($DAT.PARSERS&&$DAT.PARSERS.length>0) ? $DAT.PARSERS.map(x => `<option value="/parser/${$H(x.id)}/${data['upload_id']}">${$H(x.name)}</option>`).join('') : '';
			const select = options ? `<select class="g_pitch_attachment" onchange="$GUI.parseFromAttachment(this)"><option value="" selected="selected">[ Pitch File ]</option><optgroup label="Pitch upload to parser:">${options}</optgroup></select>` : '';
			html += `<p class="g_issue_attachment" data-x="${$H(data['upload_id'])}/${$H(data['upload_name'])}"><s class="g_issue_attachment_download">`+$H(data['data'])+'</s><s>'+select+'</s><s></s></p>';
		}
		else
			html += '<p>'+$H(data['data'])+'</p>';
		_E.insertAdjacentHTML('beforeend', html);
		_E.scrollTop = _E.scrollHeight;
	},
	issueNotify: message => $D.hidden ? $GUI.notify(message) && $GUI.beep() : null,
	parserSet: id => $GUI.saveChangesCheck(() => $DAT.parserSet(id)),
	parseFromAttachment: e => {
		const parts=e.value.split('/'), uploadId=parts.pop(), path=parts.join('/');
		e.selectedIndex = 0;
		if(path && uploadId)
			$DAT.parserSet(path, uploadId);
	},
	parserSetup: () => {
		$E('g_parser_form').reset();
		$V('g_gtf_editor_data', '[Awaiting data...]');
		$GUI.mapHasGTF(false);
		$GUI.menuSelect('parsers');
		$MENU.selectedUpdate();
	},
	parserIdCopy: id => {
		const text = $basename(id ? id : $DAT.PARSER);
		if(text)
			navigator.clipboard.writeText(text)
				.then(() => $GUI.alert("Copied Parser ID to your clipboard:\n\n" + text))
				.catch(() => $GUI.alert("Parser ID:\n\n" + text));
	},
	parserDelete: id => $GUI.confirm('Are you sure you want to permanently delete this parser?', () => { $DAT.parserDelete(id); }),
	parseDelete: id => $GUI.confirm('Are you sure you want to permanently delete this upload/output?', () => { $DAT.parseDelete(id); }),
	parsePage: page => {
		if(!$DAT.PARSER || !page)
			return;
		$DAT.PARSE_PAGE += parseInt(page);
		$NET.parses($DAT.PARSER, false);
	},
	mapSave: id => {
		$DAT.parserSave(id, false),
		$GTF.RULES_INIT = $objectClone($GTF.RULES);
	},
	mapDelete: id => $GUI.confirm('Are you sure you want to permanently delete this map and all rules?', $DAT.mapDelete),
	mapRevert: () => {
		$GTF.revert();
		$GTF.RULES = $objectClone($GTF.RULES_INIT);
	},
	mapAdd: () => $GUI.saveChangesCheck(() => $E('g_map_file').click()),
	mapHasGTF: hasGTF => {
		$E('g_parser_map_upload').style.display = (hasGTF?'none':'block');
		$E('g_gtf_editor').style.display = (hasGTF?'block':'none');
		return(hasGTF);
	},
	parserInputs: commitLastInputs => {
		let obj={};
		for(let val of $DAT.PARSER_INPUTS['names'])
			obj[val] = $V('g_parser_'+val);
		if(commitLastInputs)
			$DAT.PARSER_INPUTS['last'] = $objectClone(obj);
		return(obj);
	},
	parserSetInputs: obj => {
		if(obj)
			$DAT.PARSER_INPUTS['set'] = $objectClone(obj);
		for(let val of $DAT.PARSER_INPUTS['names'])
			$V('g_parser_'+val, $DAT.PARSER_INPUTS['set'][val]?$DAT.PARSER_INPUTS['set'][val]:'');
	},
	parserRevert: () => $GUI.parserSetInputs(null),
	parserStatesUpdate: () => $A('#g_menu_parser > div').forEach(x => x.classList[($I($DAT.PARSER_STATES,$X(x)) >= 0)?'add':'remove']('g_menu_parser_capable')),
	parserStateSelectedUpdate: () => $A('#g_menu_parser > div').forEach(x => x.classList[$X(x)==$GUI.PARSER_MENU?'add':'remove']('g_menu_parser_selected')),
	parserChangeCheck: input => {
		if($I($DAT.PARSER_STATES,'parse')<0 || !$DAT.PARSER_INPUTS['last'] || !$DAT.PARSER_INPUTS['last'][input] || $DAT.PARSER_INPUTS['last'][input]==$V('g_parser_'+input) || !_V.value)
			return;
		const confirmValue=_V.value;
		$V('g_parser_'+input, $DAT.PARSER_INPUTS['last'][input]);
		$GUI.confirm('IMPORTANT: Changing the parser input '+input+' will wipe all mapping data, continue?', () => $V('g_parser_'+input, confirmValue));
	},
	parseStatusDisplay: codeStr => {
		switch(codeStr) {
			case 'push_queued':		return('Complete (push)');
			case 'push_processing':	return('Complete (pushing)');
			case 'push_complete':	return('Complete (pushed)');
			case 'push_error':		return('Complete (push error)');
			default:				return($capitalize(codeStr));
		}
	},
	acceptedInputTypeExts: () => $X($E('g_parser_format').options[_E.selectedIndex]) ? _X.split(/[^A-Z0-9]+/).filter(x=>x) : null,
	updateFileInputs: () => {
		$X($E('g_parser_format').options[_E.selectedIndex])
		$A('#g_map_file, #g_parse_file').forEach(x => x.accept=_X)
	},
	snippetCopy: () => {
		const text = $Q('.g_snippets_selected > code').innerText;
		if(text)
			navigator.clipboard.writeText(text)
				.then(() => $GUI.alert('Successfully copied to your clipboard.'))
				.catch(() => $GUI.alert('Could not copy to your clipboard.'));
	},
	snippetSelect: item => {
		if(!item)
			return;
		$A('#g_snippets_menu > div').forEach(x => x.classList[$X(x)==item?'add':'remove']('g_snippets_menu_selected'));
		$A('#g_snippets_code > pre').forEach(x => x.classList[$X(x)==item?'add':'remove']('g_snippets_selected'));
	},
	billingClick: type => type ? $NET.billingLink(type) : null,
	saveChangesCheck: callback => {
		if($GUI.MENU!='parsers')
			callback();
		else if($GUI.PARSER_MENU=='map' && $GTF.RULES && $GTF.RULES.length && !$objectCompare($GTF.RULES,$GTF.RULES_INIT))
			$GUI.confirm('Mapping rules have changed, continue WITHOUT saving?', () => $GUI.mapRevert() || callback());
		else if($GUI.PARSER_MENU=='info' && $DAT.PARSER_INPUTS['last'] && $DAT.PARSER_INPUTS['set'] && !$objectCompare($DAT.PARSER_INPUTS['last'], $GUI.parserInputs()))
			$GUI.confirm('Parser information has changed, continue WITHOUT saving?', () => $GUI.parserRevert(null) || callback());
		else
			callback();
	}
},
MENU: {
	selectedUpdate: () => $A('#g_menu ul > li').forEach(x => x.classList[$GUI.MENU==$X(x) || ($GUI.MENU=='parsers'&&$X(x)==$DAT.PARSER) || ($GUI.MENU=='issues'&&$X(x)==$DAT.ISSUE)?'add':'remove']('g_menu_selected')) || $GUI.loadState(),
	scroll: e => $D.body.classList[e.target.scrollTop?'add':'remove']('g_menu_scrolled'),
	hideIfSmallView: unHideIfNot => {
		const rule = $W.innerHeight > $W.innerWidth;
		if(unHideIfNot)
			$MENU.toggle(!rule);
		else if(rule)
			$MENU.toggle(false);
	},
	toggle: explicit => {
		if(typeof explicit == 'boolean')
			$D.body.classList[explicit?'remove':'add']('g_app_no_menu');
		else
			$D.body.classList[$GUI.isNoMenu()?'remove':'add']('g_app_no_menu');
	},

	about: () => {
		$GUI.aboutRestart(true);
		$GUI.appMode(false);
	},
	account: () => {
		$E('g_username').focus();
	},
	billing: () => $NET.billing(),
	snippets: () => {
		if(hljs && !hljs.hasHighlightedAll) {
			hljs.highlightAll();
			hljs.hasHighlightedAll = true;
			$A('.hljs-string, .hljs-comment').forEach(e => { let m; if(m=e.innerText.match(/(~G_([A-Z_]+)~)/)) e.innerHTML = e.innerHTML.replace(m[0], '<span class="g_snippet_'+m[2].toLowerCase()+'">'+m[2]+'</span>') })
		}
		const parser=$DAT.parserFind($basename($DAT.PARSER));
		$A('.g_snippet_user').forEach(e => e.innerText = $DB.get('user') ? $DB.get('user') : '***USERNAME***' );
		$A('.g_snippet_pass').forEach(e => e.innerText = '***PASSWORD***' );
		$A('.g_snippet_parser_id').forEach(e => e.innerText = parser ? parser.id : '***PARSER_ID***');
		$A('.g_snippet_parser_name').forEach(e => e.innerText = parser ? parser.name : 'Parser ID');
		$GUI.snippetSelect('sh');
	},
	api: () => {
		if($GUI.SWAGGER)
			return;
		$GUI.SWAGGER = SwaggerUIBundle({
			url: "swagger.json", //Location of Open API spec in the repo
			dom_id: '#g_api_swagger_container',
			deepLinking: true,
			presets: [ SwaggerUIBundle.presets.apis, SwaggerUIBundle.SwaggerUIStandalonePreset ],
			plugins: [ SwaggerUIBundle.plugins.DownloadUrl ]
		});
	}
},

/*************************************************************************************************\
\*******  DATA / STATE LOGIC  ***********************************************  [ $DAT.* ]  *******/
DAT: {
	PARSER_INPUTS: {'last':null, 'set':null, 'names':['name','description','email','url','filename_match','format','structure','mask','parameters','output','output_encoding','output_structure','profile','readonly']},
	PARSERS:[], PARSER_STATES:[], PARSER_STATES_LOADED:[], PARSER:'', PARSE_PAGE:0, LOAD_STATE:null, TEMP_STATES:{}, REGEXES:{},
	ISSUES:[], ISSUE:'', ISSUE_LAST:0, LOGGED_IN:false, ADMIN:false, FRAGMENTS:{},

	setup: () => $DAT.LOAD_STATE = $DB.get('state'),
	logout: () => $DB.clear() && location.reload(),
	saveState: state => $DB.set('state', state!='about'?state:null) || state,
	parserSetStates: states => {
		$DAT.PARSER_STATES_LOADED = [];
		$DAT.PARSER_STATES = typeof states=='object' ? states : [];
		if(!$GUI.PARSER_MENU && $DAT.PARSER_STATES && $DAT.PARSER_STATES.length)
			$GUI.PARSER_MENU = $DAT.PARSER_STATES[0];
		$GUI.parserStatesUpdate();
	},
	parserSet: (id, pushUploadId, followOnly) => {
		$DAT.PARSER_INPUTS['set'] = $DAT.PARSER_INPUTS['last'] = $DAT.TEMP_STATES['push_attachment'] = $DAT.TEMP_STATES['follow_only'] = null;
		$DAT.PARSE_PAGE = 0;
		if(!id || id[0] != '/')
			return;
		if(pushUploadId) {
			$DAT.TEMP_STATES['push_attachment'] = pushUploadId;
			$DAT.TEMP_STATES['follow_only'] = followOnly;
		}
		$DAT.parserSetStates(['info']);
		$GUI.parserMenuSelect();
		$GUI.parserReadOnly(false);
		if($DAT.saveState($DAT.PARSER=id)=='/parser/0')
			$GUI.tooltipWalk(true);
		$A('#g_parser_info_delete, #g_parser_info_clone, #g_parser_info_issue, #g_parser_info_parser_id').forEach(x => x.disabled = $DAT.PARSER=='/parser/0');
		if($DAT.saveState($DAT.PARSER=id) != '/parser/0')
			$NET.parser($DAT.PARSER);
		$GUI.parserSetup();
	},
	parserFind: id => id ? $DAT.PARSERS.find(x => x.id==id) : null,
	parserSave: (id, clone) => {
		$V('g_parser_name', $parserName($V('g_parser_name')));
		if(!$V('g_parser_profile'))
			_V.selectedIndex=0;
		const json = { ...$GUI.parserInputs(true), 'rules': $GTF.hasRules($GTF.RULES)?JSON.stringify($GTF.RULES):null, 'clone': clone }
		$NET.parserSave(id?id:$DAT.PARSER, json);
	},
	parserDelete: id => $NET.parserDelete(id?id:$DAT.PARSER),
	parseDelete: id => $NET.parseDelete(id),
	parserIssue: id => $NET.issue(id?id:$DAT.PARSER),
	issueSet: (id, noNet) => {
		if($DAT.saveState($DAT.ISSUE=id) != '/issue/0' && !noNet)
			$NET.issue($DAT.ISSUE, $DAT.ISSUE_LAST);
		$GUI.menuSelect('issues');
		$MENU.selectedUpdate();
	},
	issueDelete: id => $NET.issueDelete(id?id:$DAT.ISSUE),
	mapDelete: id => $NET.mapDelete(id?id:$DAT.PARSER),
	hashTask: (task, value) => {
		switch(task) {
			case 'verify': $NET.verify(value); break;
			case 'support': $GUI.supportOpen(false, value); break;
			case 'auth':
				$DB.clear();
				$DB.set('auth', value);
				$NET.login(true);
				break;
		}
		history.replaceState(null, null, ' ');
	}
},


/*************************************************************************************************\
\*******  FETCH & NETWORK PARSING LOGIC  ************************************  [ $NET.* ]  *******/
NET: {
	URL: 'https://api.' + document.domain.replace(/^www\./i,''), SYNC_RESPONSE: null,

	setup: () => {
		if($DB.get('auth'))
			$NET.login(true);
	},
	credentials: () => $DB.get('auth') ? ('Bearer '+$DB.get('auth')) : ('Basic '+btoa(`${$E('g_username').value}:${$E('g_password').value}`)),
	get: (action, args, callback, busy) => $NET.fetch('GET', action, args, callback, busy),
	post: (action, args, callback, busy) => $NET.fetch('POST', action, args, callback, busy),
	delete: (action, args, callback, busy) => $NET.fetch('DELETE', action, args, callback, busy),
	fetch: (method, action, args, callback, busy) => {
		let headers=new Headers({'Authorization':$NET.credentials()}), params='';
		if(method=='POST' && typeof(args)=='object' && args?.constructor?.name!='FormData')
			headers.set('Content-Type', 'application/json');
		else if(method=='GET' && typeof(args)=='object' && args)
			params = '?'+new URLSearchParams(args);
		if(busy)
			$GUI.busy(true);
		fetch($NET.URL+action+params, {method:method, headers:headers, body:(method=='POST'?(args?.constructor?.name=='FormData'?args:JSON.stringify(args)):null)})
		.then(r => $DAT.LOGGED_IN && r.status==401 ? $DAT.logout() : r.json())
		.then(json => $NET.response(callback,json))
		.catch(json => $NET.response(callback,json));
	},
	response: (callback, json) => {
		$GUI.busy(false);
		if($isVisible($E('g_error')))
			$GUI.error('', 0.01);
		if(typeof json == 'object') {
			if(json.message) $GUI.alert(json.message);
			if(json.error) return($GUI.error(json.error));
			if(json.auth) $DB.set('auth', json.auth);
		}
		if(callback) callback(json);
	},
	download: (path, filename) => {
        fetch($NET.URL+path, {
            method: 'GET',
            headers: new Headers({'Authorization': $NET.credentials()})
        })
        .then(r => r.blob())
        .then(b => {
			const u=$W.URL.createObjectURL(b), a=$D.createElement('a');
            a.href=u; a.download=filename?filename:path.replace(/.*\//,'');
            $D.body.appendChild(a);
            a.click(); a.remove();
		});
	},
	upload: e => {
		let formData=new FormData(), path=null, callback=null, file=(e.target?e.target:e).files[0], ext=(file&&file.name?file.name.replace(/.+\./,'').toUpperCase():''), onlyAccept=$GUI.acceptedInputTypeExts();
		if($GUI.MENU=='issues' && $DAT.ISSUE) {
			path = `/issue/${$basename($DAT.ISSUE)}`;
			callback = $NET.issueSendResponse;
		}
		else if(onlyAccept && !onlyAccept.includes(ext))
			$GUI.error(`File extension ${ext} is not supported for this parser, use: ${onlyAccept.join(', ')}`);
		else if($GUI.MENU=='parsers' && $GUI.PARSER_MENU=='map') {
			path = `/map/${$basename($DAT.PARSER)}`;
			callback = $NET.mapResponse;
		}
		else if($GUI.MENU!='about') {
			path = '/parse/' + ($GUI.MENU=='parsers'?$basename($DAT.PARSER):'');
			callback = $NET.parseResponse;
		}
		if(path && callback) {
			formData.append('file', file);
			$NET.post(path, formData, callback, true);
		}
		$A('.g_file').forEach(e => e.value = null);
	},
	verify: id => $NET.get('/user/verify/'+$basename(id), null, $NET.loginResponse),
	verifySend: id => $NET.get('/user/verify', null),
	signUp: (args, passive) => $NET.post('/user', args, $NET.loginResponse, !passive),
	accountSave: args => $NET.post('/user', args, $NET.loginResponse, true),
	login: passive => (passive||$DB.clear()) && $NET.get('/user/', null, $NET.loginResponse, !passive),
	loginResponse: json => { 
		if(!json || !json['user'] || !json['auth']) {
			$DB.clear();
			$GUI.loggedIn(false);
			return;
		}
		else if($GUI.locked()) {
			$NET.SYNC_RESPONSE = json;
			return;
		}

		['verified','admin'].forEach(x => $D.body.classList[json[x]?'add':'remove']('g_app_'+x));
		$DAT.admin = !!json['admin'];

		$DB.set('auth', json['auth']);
		$DB.set('user', json['user']);

		$V('g_username', json['user']);
		$V('g_account_user', json['user']);
		$V('g_account_email', json['email']);
		_V.readOnly = (json['verified'] && !$DAT.admin);
		$V('g_account_password', '');
		$V('g_account_password_confirm', '');
		$V('g_account_contact', json['contact']);
		$V('g_account_quota', json['quota']);
		_V.readOnly = !$DAT.admin;

		if(typeof json['options'] == 'number')
			$A('#g_account_container input[type="checkbox"]').forEach(e => e.checked = !!(json['options'] & parseInt(e.value)));

		$GUI.stopSplash();
		$GUI.appMode(true);
		$GUI.loggedIn(true);
		$NET.parsers();
		$NET.issues();
	},
	parses: (id, passive) => $NET.get('/parse/'+$basename(id)+'/'+$DAT.PARSE_PAGE, null, $NET.parsesResponse, !passive),
	parseDelete: id => $NET.delete('/parse/'+id+'/'+$DAT.PARSE_PAGE, null, $NET.parsesResponse, true),
	parseFromAttachment: (parserId, uploadId) => $NET.post('/parse/'+$basename(parserId)+'/'+$basename(uploadId), {}, $NET.parseResponse, true),
	parsesResponse: json => {
		$V('g_parses_list', '');
		if(!json || !json['parses'])
			return;
		let hasFiles=json['parses'].length, html='<table><tr><th>Action</th><th>Filename (in/out)</th><th>Size</th><th>Status</th><th>Details</th><th>Created</th><th>Completed</th></tr>';
		$E('g_parser_content').classList[hasFiles?'add':'remove']('g_has_files');
		if(typeof json['page'] == 'number')
			$DAT.PARSE_PAGE = json['page'];
		if(hasFiles) {
			for(let parse of json['parses']) {
				const downloadClass=(parse['status']&&parse['status'].match(/complete|push_(?!error)/)?'has_download':'no_download');
				html += `<tr class="g_parse_list_${$H(parse['status'])}" data-x="/parse/${$basename($DAT.PARSER)}/${parse['id']}/${parse['filename']}"><td>  <span class="g_parse_issue" title="Contact support" data-x="${parse['id']}">${$F('g_f_help_icon')}</span><span class="g_parse_delete" title="Delete" data-x="${$basename($DAT.PARSER)}/${parse['id']}">${$F('g_f_delete_icon')}</span><span class="g_parse_${downloadClass}" title="Download">${$F('g_f_download_icon')}</span></td><td class="g_parse_link_${downloadClass}">${$H(parse['filename'])}</td><td>${$sizeDisplay(parse['filesize'],1024,['B','K','M','G','T'])}</td><td><i>&nbsp;</i>${$GUI.parseStatusDisplay(parse['status'])}</td><td>${$H(parse['details'])}</td><td>${$dateDisplay(parse['created'])}</td><td>${$dateDisplay(parse['completed'])}</td></tr>`;
			}
			html += '</table>';
			html += '<div id="g_parse_page_change">#' + ($DAT.PARSE_PAGE+1) + ': <button type="button" data-x="-1">&lt;-</button> <button type="button" data-x="1">-&gt;</button></div>'
			$V('g_parses_list', html);
		}
		if($DAT.PARSER && json['parses'].some(x => x && ['queued','processing','push_queued','push_processing'].indexOf(x['status']) >= 0))
			$POL.start('parses', 5);
		else
			$POL.stop('parses');
	},
	parseResponse: json => {
		if(json && json['id'] && json['inferred_parser_id'])
			$DAT.parserSet('/parser/'+json['inferred_parser_id'], json['id'], true);
		else {
			$DAT.PARSE_PAGE = 0;
			$NET.parses($DAT.PARSER)
		}
	},
	parsers: busy => $NET.get('/parser' + (Object.keys($DAT.REGEXES).length==0?'':'/0'), null, $NET.parsersResponse, busy),
	parsersResponse: json => {
		if(!json || !json['parsers'])
			return;
		if(json['tutorial'])
			$GUI.tooltipWalk(true);
		if(json['profiles'] && $E('g_parser_profile') && _E.options.length==0)
			json['profiles'].forEach(x => _E.add(new Option(x.join(' :: '), `/${x[0]}/${x[1]}`)));
		if(json['outputs'] && $E('g_parser_output') && _E.options.length==0)
			json['outputs'].forEach(x => _E.add(new Option(x.join(' :: '), x[0])));
		if(json['formats'] && $E('g_parser_format') && _E.options.length==0)
			json['formats'].forEach(x => {
				const accept=x.pop(), option=new Option(x.join(' :: '), x[0]);
				option.dataset.x = accept;
				_E.add(option);
			});
		if(json['regexes'] && Object.keys($DAT.REGEXES).length==0) {
			let html='';
			html += `<div data-x="" title="Disable matching"><span data-x="">[ Disable ]</span></div>`;
			$DAT.REGEXES[''] = '';
			for (let [n,v] of Object.entries(json['regexes'])) {
				html += `<div data-x="${$H(n)}" title="Match must contain ${$H(n)}"><span data-x="${$H(n)}">${$H(n)}</span>`;
				$DAT.REGEXES[n] = v;
				if(json['regexes_mods']) {
					for (let [mn,mv] of Object.entries(json['regexes_mods'])) {
						const hn=mn+' '+n, hv=mv[0]+v+mv[1];
						$DAT.REGEXES[hn] = hv;
						html += `<span data-x="${$H(hn)}" title="${$H(mv[2])}">${$H(mn)}</span>`;
					}
				}
				html += `</div>`;
			}
			$V('g_gtf_filter_value_choices', html);
		}
		$DAT.PARSERS = [...json['parsers']];
		json['parsers'].push({'id':'0', 'name':'< new >'});
		$V('g_menu_parsers', json['parsers'].map(x=>`<li data-x="/parser/${x['id']}">${$H(x['name'])}</li>`).join(''));
		$MENU.selectedUpdate();
	},
	parser: id => $NET.get('/parser/'+$basename(id), null, $NET.parserResponse, true),
	parserResponse: json => {
		if(!json)
			return;
		$GUI.parserReadOnly(!!json['readonly'] && !json['admin']); 
		$DAT.parserSetStates(json['states'] ? json['states'] : ['info']);
		$GUI.parserSetInputs(json);
		$GUI.parserInputs(true);
		if($DAT.TEMP_STATES['push_attachment']) {
			if($I($DAT.PARSER_STATES, 'parse') >= 0)
				$GUI.parserMenuSelect('parse');
			else {
				$GUI.alert('Sorry, this parser is not currently capable of parsing files.');
				$DAT.TEMP_STATES['push_attachment'] = null;
			}
		}
	},
	parserSave: (id, args) => $NET.post('/parser/'+$basename(id), args, $NET.parserSaveResponse, true),
	parserSaveResponse: json => {
		if(!json)
			return;
		$NET.parserResponse(json);
		if(json['new_id'])
			$DAT.parserSet('/parser/'+json['new_id']);
		$NET.parsers();
	},
	parserDelete: id => $NET.delete('/parser/'+$basename(id), null, $NET.parserDeleteResponse, true),
	parserDeleteResponse: json => {
		$DAT.parserSet('/parser/0');
		$NET.parsers(true);
	},
	issues: busy => $NET.get('/issue', null, $NET.issuesResponse, busy),
	issuesResponse: json => {
		if(!json || !json['issues'])
			return;
		$DAT.ISSUES = [...json['issues']];
		$E('g_menu_issues_header').classList[json['issues'].length?'add':'remove']('g_has_issues')
		$V('g_menu_issues', json['issues'].map(x=>`<li data-x="/issue/${x['id']}">${$H(x['name']?x['name']:x['id'])}</li>`).join(''));
		$MENU.selectedUpdate();
	},
	issue: (id, ts) => $NET.get('/issue/'+$basename(id)+(ts?'/'+ts:''), null, $NET.issueResponse, !ts),
	issueResponse: json => {
		$NET.issuesResponse(json);
		if(!json || !json['data'])
			return;
		if(json['id'])
			$DAT.issueSet('/issue/'+json['id'], true);
		if(!json['ts'])
			$POL.start('issue', 15);
		if(json['data']?.[0]?.ts)
			$DAT.ISSUE_LAST = json['data'][0].ts;
		if(json['data']) {
			json['data'].reverse().forEach((data, i) => $GUI.issueDisplayMessage(data, !i && !json['ts']));
			if(json['ts'] && json['data'].length)
				$GUI.issueNotify((json['admin']&&json['user']?json['user']:'Gristle support') + ' has sent a new message!');
		}
		if($E('g_issue_input'))
			_E.focus();
	},
	issueDelete: id => $NET.delete('/issue/'+$basename(id), null, $NET.issueDeleteResponse, true),
	issueDeleteResponse: json => {
		$NET.issuesResponse(json);
		if($Q('#g_menu_issues > li') && $X(_Q))
			$GUI.issueSet(_X);
		else
			$GUI.menuSelect('account');
	},
	issueSend: (id, data) => $NET.post('/issue/'+$basename(id), {'data':data}, $NET.issueSendResponse, true),
	issueSendResponse: json => {
		if(!json || !json['data'])
			return;
		if(json['id'])
			$DAT.issueSet('/issue/'+json['id'], true);
		if(json['ts'])
			$DAT.ISSUE_LAST = json['ts'];
		if(json['data'])
			json['data'].reverse().forEach(data => $GUI.issueDisplayMessage(data));
	},
	mapDelete: (id, idx) => $NET.delete('/map/'+$basename(id)+(idx?`/${idx}`:''), null, $NET.mapResponse, true),
	map: id => $NET.get('/map/'+$basename(id), null, $NET.mapResponse, true),
	mapResponse: json => {
		$GTF.reset();
		if(!$GUI.mapHasGTF(json&&json['gtf']))
			return;
		$GTF.init(json['gtf'], json['rules']);
		$GTF.mapMultiShowIcons(json['count'] && json['count'] > 1);
		$GTF.columnUpdate();
		$GTF.revert($GTF.RULES);
	},
	billing: () => $E('g_billing_container').className=='g_billing_loading' ? $NET.get('/billing', null, $NET.billingResponse, true) : null,
	billingResponse: json =>  {
		if(!json)
			return;
		if(json['subscription'])
			$E('g_billing_container').className = 'g_billing_' + json['subscription'].toLowerCase();
		else
			$E('g_billing_container').className = 'g_billing_free';
	},
	billingLink: arg => $NET.get('/billing/link/'+arg, null, $NET.billingLinkResponse, true),
	billingLinkResponse: json =>  {
		if(!json['url'])
			$GUI.alert('Could not create a payment link, please try again.');
		else {
			$E('g_billing_container').className = 'g_billing_loading';
			location.href = json['url'];
		}
	}
},


/*************************************************************************************************\
\*******  MAPPING EDITOR LOGIC  *********************************************  [ $GTF.* ]  *******/
GTF: {
	VIEW:true, COLUMN:0, MAP:0, VIEW:true, GROUP:false, SINGLE:false, EXCLUDE:false, SCROLLING:false, DATA:[], MAPS:[], RULES:[], RULES_INIT:[], UPDATE_TIMEOUT:null, EXCLUDE_COLORS: ['#f00','#000'], COLORS:[
		['#008800','#bbccbb'],
		['#008888','#bbcccc'],
		['#446688','#aabbcc'],
		['#888844','#ccccaa'],
		['#886644','#ccbbaa'],
		['#884444','#ccaaaa'],
		['#664488','#bbaacc'],
		['#880088','#ccaacc'],
		['#004400','#889988'],
		['#004444','#889999'],
		['#002244','#778899'],
		['#444400','#999977'],
		['#442200','#998877'],
		['#440000','#997777'],
		['#220044','#887799'],
		['#440044','#997799']
	], GROUP_COLORS:['#388E3C','#039BE5','#FB8C00','#8E24AA','#3949AB','#CDDC39','#6D4C41','#AD1457','#81C784','#607D8B','#FF8A65','#BA68C8','#4DD0E1','#F4511E','#FFD54F','#00897B','#9E9D24','#EF6C00','#616161'],
	NAMES: {
		COLUMN: ['name_text','fg_color','bg_color','join_line_enabled','join_column','join_delimiter'],
		FILTER: ['enabled','len_min','len_max','hpos_min','hpos_max','vpos_min','vpos_max','page_min','page_max','pre_text','value_text','value_replace_text'],
		PATTERN: ['skip_rows', 'trim_rows', 'every_count', 'every_skip', 'join_modulo', 'join_modulo_delimiter']
	},
	setup: () => Object.keys($GTF.NAMES).forEach(n => $GTF.NAMES[n].forEach((x,i) => $GTF[x]=i)),

	init: (gtf, rules) => {
		let html='', gtfData=(typeof gtf=='string'?$GTF.parse(gtf):gtf), width=0, maxWidth=0, height=0, page=1;
		$GTF.appendBaseRules();
		$GTF.MAP = 0;
		$GTF.MAPS = [];
		for(let [ins,txt] of gtfData) {
			if(ins[0] == '~') {
				if(html) {
					$GTF.MAPS.push($GTF.rulerWidthHTML(maxWidth, html));
					html = '';
				}
				width = maxWidth = height = 0;
				page = 1;
				continue;
			}
			if(!width)
				html += '<u data-x="@H'+(++height)+'">--</u>';
			if(ins == '*')
				html += '<s class="">' + $H(txt) + '</s>';
			else if(ins != '#')
				html += '<i class="' + ($M(/(.)([0-9]+)@([0-9A-Z]+)\.([0-9]+)$/,ins) ? `t_${_M[1].match(/[A-Z]/)?'k':'u'}` : '') + '" title="' + ($M(/(^[A-Z][A-Z_]+)/i,ins)?_M[0]:'TEXT') + '" data-x="' + ins + '">' + $H(txt) + '</i>';
			if(ins == '!') {
				if(width > maxWidth)
					maxWidth = width;
				width = 0;
			}
			else if(ins == '#') {
				html += '<p data-x="#"><u data-x="@P'+(++page)+'">' + ('#'+page).substr(-2) + '</u></p>';
				height = 0;
			}
			else if(ins[0] == '~') {
				if(html) {
					let widthRuler='<u data-x="@P1">#1</u>';
					for(let w=1; w <= maxWidth; w++) {
						widthRuler += '<u data-x="@W'+w+'">|</u>';
					}
					html = '<div id="g_gtf_editor_data_ruler">' + widthRuler + '</div>' + html;
					$GTF.MAPS.push(html);
					html = '';
				}
				width = maxWidth = height = 0;
				page = 1;
			}
			else
				width += txt.length;
		}
		if(html && maxWidth)
			$GTF.MAPS.push($GTF.rulerWidthHTML(maxWidth, html));
		$GTF.zoomAuto(false);
		$GTF.mapShow(0);
		$GTF.revert(rules);
	},
	scrollChange: e => {
		const scrollSpan=($E('g_gtf_editor_controls').scrollWidth-_E.clientWidth);
		$E('g_parser_scrollbar').classList[scrollSpan>0?'add':'remove']('g_scrollable');
		if(e === null) {
			$GUI.reset('g_parser_scrollbar_button', 'g_parser_scrollbar_button 1s normal forwards');
			if(scrollSpan)
				return;
			e = 0;
		}
		let pct=0, maxPos=$E('g_parser_scrollbar').clientWidth, pos=(typeof(e)=='number') ? (maxPos*(e*0.01)) : ((e.targetTouches?e.targetTouches[0].pageX:e.clientX)-$E('g_parser_scrollbar').offsetLeft);
		if(pos < 0)
			pos = 0;
		else if(pos > maxPos)
			pos = maxPos;
		pct = pos / maxPos;
		$E('g_gtf_editor_controls').style.left = '-' + (scrollSpan * pct) + 'px';
		$E('g_parser_scrollbar_button').style.left = (pos-10) + 'px';
	},
	scrollFix: () => {
		$E('g_parser_content').style.overflowX = 'auto';
		_E.scrollLeft=0;
		_E.style.overflowX = 'hidden';
	},
	mapShow: map => {
		$GTF.MAP += parseInt(map);
		if($GTF.MAP >= $GTF.MAPS.length)
			$GTF.MAP = 0;
		else if($GTF.MAP < 0)
			$GTF.MAP = $GTF.MAPS.length > 0 ? $GTF.MAPS.length-1 : 0;
		html = $GTF.MAPS[$GTF.MAP];
		$V('g_gtf_editor_data', html);
		$GTF.updateElements();
		$GUI.reset('g_gtf_editor_data', 'g_gtf_editor_data_fade_in 1s normal forwards');
	},
	mapDelete: () => $GUI.confirm('Are you sure you want to permanently delete the current map entry?', () => $NET.mapDelete($DAT.PARSER, $GTF.MAP+1)),
	mapMultiShowIcons: show => $A('.g_gtf_icon_multi_map').forEach(x => x.classList[show?'add':'remove']('g_show_flex')),
	revert: rules => {
		$GTF.rules($objectClone(rules?rules:$GTF.RULES_INIT));
		$GTF.COLUMN = 0;
		$GTF.setMode('view');
		$GTF.columnSelect(0);
		$GTF.columnUpdatePulldown();
	},
	reset: () => ($GTF.DATA=[]) && ($GTF.RULES_INIT=$objectClone($GTF.RULES=$GTF.rulesBase())) && ($GTF.COLUMN=0),
	hasRules: rules => typeof(rules)=='object' && rules && rules.length,
	ruleEncode: str => new RegExp('^' + str.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/[\\]+\*/,'.*') + '$'),
	ruleBase: () => $objectClone({'C':[],'E':[],'F':[],'P':{},'R':[]}),
	rulesBase: () => $objectClone([$GTF.ruleBase()]),
	rules: rules => {
		switch(typeof rules) {
			case 'string': $GTF.RULES_INIT=rules?JSON.parse(rules):$GTF.rulesBase(); break;
			case 'object': $GTF.RULES_INIT=rules?rules:$GTF.rulesBase(); break;
			case 'undefined': break;
			default: $GTF.RULES_INIT=$GTF.rulesBase(); break;
		}
		return($GTF.RULES=$objectClone($GTF.RULES_INIT));
	},
	parse: data => {
		if(!data)
			return;
		let delim=data.substr(0,1), parts=data.substr(1).split(delim), fmt;
		$GTF.reset();
		while(fmt=parts.shift())
			$GTF.DATA.push([fmt, parts.shift()]);
		return($GTF.DATA);
	},
	zoom: amt => {
		let fontSize=$W.getComputedStyle($D.body).getPropertyValue('--g-gtf-font-size'), newSize=(amt+parseInt(fontSize));
		$GTF.zoomSet(newSize, fontSize.replace(/[^a-z]/ig,''));
	},
	zoomAuto: passiveMobile => (passiveMobile&&$isMobile()) || $GTF.zoomSet(Math.floor($E('g_gtf_editor_data').offsetWidth/95)),
	zoomSet: (n,s) => $D.body.style.setProperty('--g-gtf-font-size', (n<8?8:(n>40?40:n)) + (s?s:'px')),
	zoomGet: () => parseInt($W.getComputedStyle($D.body).getPropertyValue('--g-gtf-font-size')),
	columnToggle: explicit => {
		const toggle=(typeof explicit=='boolean'?!explicit:$E('g_gtf_column_color_choices').classList.contains('g_show'));
		$E('g_gtf_column_color_choices').classList[toggle?'remove':'add']('g_show');
		if($E('g_gtf_editor_data_ruler'))
			_E.classList[toggle?'remove':'add']('g_has_column_pulldown');
		if(!toggle && $E('g_gtf_column_name_text')) {
			$GUI.tooltipClear(true);
			_E.focus();
		}
	},
	columnUpdateInputs: inputs => {
		inputs.forEach(type => {
			for(let i=0; i < $GTF.NAMES[type].length; i++) {
				const key=$GTF.NAMES[type][i], k=type[0], val=(!$GTF.RULES[$GTF.COLUMN]||!$GTF.RULES[$GTF.COLUMN][k]||typeof $GTF.RULES[$GTF.COLUMN][k][i]=='undefined') ? '' : $GTF.RULES[$GTF.COLUMN][k][i];
				if(!key || !$E('g_gtf_'+type.toLowerCase()+'_'+key))
					continue;
				else if(key.match(/enabled$/))
					_E.checked = !!val;
				else if(key.match(/(text|delimiter)$/))
					_E.value = val;
				else if(key.match(/color$/))
					_E.value = val ? val : $GTF.columnNextColorPair()[key[0]=='f'?0:1];
				else
					_E.value = parseInt(val?val:0);
			}
		});
	},
	columnSelect: column => {
		$GTF.COLUMN = parseInt(column ? column : 0);
		if($GTF.COLUMN > $GTF.RULES.length)
			$GTF.COLUMN = $GTF.RULES.length;
		$GTF.appendBaseRules($GTF.COLUMN);
		$GTF.columnUpdatePulldown();
		$GTF.columnUpdateInputs(['FILTER','COLUMN']);
		$GTF.rulerToggle($E('g_gtf_filter_enabled').checked);
		$GTF.columnUpdate(); // for new colors
		$GTF.columnToggle(false);
		$GTF.filterTextFocus(false);
		$GTF.filterPlaceholderUpdate(null);
		$E('g_gtf_column_name_text').focus();
		$GTF.scrollChange(null);
	},
	columnShift: offset => {
		let parent=$GTF.RULES[$GTF.COLUMN]['C'][$GTF.join_column], to=0;
		$GTF.columnToggle(true);
		if(parent) {
			for(let c=$GTF.COLUMN+(offset<0?-1:1); c >= 0 && c < $GTF.RULES.length; c+=(offset<0?-1:1)) {
				if($GTF.RULES[c]['C'][$GTF.join_column] == parent) {
					to = c;
					break;
				}
			}
			if(to) {
				$GTF.RULES.splice(to, 0, $GTF.RULES.splice($GTF.COLUMN,1)[0]);
				$GTF.COLUMN = to;
				return(true);
			}
			return(false);
		}
		to = $GTF.COLUMN + offset;
		if(offset && 0 > to || to >= $GTF.RULES.filter(c=>!c['C'][$GTF.join_column]).length || $GTF.RULES[$GTF.COLUMN]['C'][$GTF.join_column])
			return(false);
		$GTF.RULES.splice(to, 0, $GTF.RULES.splice($GTF.COLUMN,1)[0]);
		$GTF.RULES.forEach((column,c) => {
			const jc=column['C'][$GTF.join_column], jca=Math.abs(jc);
			if(!jca)
				return(false);
			if($GTF.COLUMN==jca-1)
				$GTF.RULES[c]['C'][$GTF.join_column] = to+1;
			else if(to==jca-1)
				$GTF.RULES[c]['C'][$GTF.join_column] = $GTF.COLUMN+1;
			else
				return(false);
			if(jc < 0)
				$GTF.RULES[c]['C'][$GTF.join_column] = -$GTF.RULES[c]['C'][$GTF.join_column];
		});
		$GTF.COLUMN = to;
		return(true);
	},
	columnDelete: () => {
		if($GTF.RULES.length < 2 || !$GTF.RULES[$GTF.COLUMN])
			return;
		if($GTF.RULES.some(c=>c['C']&&c['C'][$GTF.join_column]&&Math.abs(c['C'][$GTF.join_column]) == $GTF.COLUMN+1))
			return($GUI.alert('This column has other columns joined to it, please delete them first.'));
		$GUI.confirm('Are you sure you want to delete the current column?', () => { 
			$GTF.RULES.splice($GTF.COLUMN,1);
			$GTF.RULES.forEach((x,c) => {
				if(x['C'][$GTF.join_column] && Math.abs(x['C'][$GTF.join_column]) > $GTF.COLUMN)
					$GTF.RULES[c]['C'][$GTF.join_column] += x['C'][$GTF.join_column]>0?-1:1;
			});
			$GTF.columnSelect(0);
		});
	},
	columnDisplayNum: (column, isPrompt) => {
		if(!$GTF.RULES[column])
			return('#?');
		const jc=$GTF.RULES[column]['C'][$GTF.join_column], jca=Math.abs(jc), join=jc&&$GTF.RULES[jca-1]&&$GTF.RULES[jca-1]['C'];
		return(join ? ((jc<0?'&#11024;&nbsp;':'&#11025;&nbsp;')+(isPrompt?'#'+jca:'+')) : ('#'+(column+1)));
	},
	columnNextColorPair: () => {
		const usedColors=$GTF.RULES.map(c=>c['C'][$GTF.bg_color]), unusedColorPair=$GTF.COLORS.find(x=>!usedColors.includes(x[1]));
		return(unusedColorPair ? unusedColorPair : $GTF.COLORS[Math.floor(Math.random()*$GTF.COLORS.length)]);
	},
	columnUpdatePulldown: () => {
		let divs='', options=['',''], columns=[], joins=[], hasJoins=$GTF.RULES.some(x => x['C'][$GTF.join_column]&&(Math.abs(x['C'][$GTF.join_column])-1)==$GTF.COLUMN), si=$E('g_gtf_column_join_column').selectedIndex;
		$GTF.columnReOrder();
		$E('g_gtf_column_join_column').options[0].text = hasJoins?'[Exempt (has joins)]':(si?'[Remove current join]':'[Join to other column]');
		$E('g_gtf_column_join_delimiter').placeholder = si ? '[SEP]' : '[N/A]';
		$E('g_gtf_column_join_delimiter').disabled = !si;
		$E('g_gtf_column_join_column_detail').style.display = si ? 'inline' : 'none';

		$GTF.RULES.forEach((x,c) => {
			const jc=$GTF.RULES[c]['C'][$GTF.join_column], jca=Math.abs(jc), join=jc&&$GTF.RULES[jca-1]&&$GTF.RULES[jca-1]['C'], n=join?jca:(c+1);
			const columnName=$GTF.RULES[c]['C'][$GTF.name_text]?$GTF.RULES[c]['C'][$GTF.name_text]:'[COLUMN NAME]';

			if(join) {
				$GTF.RULES[c]['C'][$GTF.fg_color] = $GTF.RULES[jca-1]['C'][$GTF.bg_color];
				$GTF.RULES[c]['C'][$GTF.bg_color] = $GTF.RULES[jca-1]['C'][$GTF.fg_color];
			}
			const div=`<div data-x="${c}" style="color:${$GTF.RULES[c]['C'][$GTF.fg_color]};background-color:${$GTF.RULES[c]['C'][$GTF.bg_color]}">${$GTF.columnDisplayNum(c)} ` + $H(columnName) + `</div>`;
			if(join) {
				const idx=jc<0?0:1;
				if(!joins[n])
					joins[n] = [];
				if(!joins[n][idx])
					joins[n][idx] = [];
				joins[n][idx].push(div);
			}
			else {
				columns[n] = div;
				if(!hasJoins && c != $GTF.COLUMN) {
					options[0] += `<option value="${c+1}">${$H(columnName)} (append)</option>`;
					options[1] += `<option value="-${c+1}">${$H(columnName)} (prepend)</option>`;
				}
			}
		});

		$V('g_gtf_column_name_text_num', $GTF.columnDisplayNum($GTF.COLUMN, true));
		$V('g_gtf_column_name_text', $GTF.RULES[$GTF.COLUMN]['C'][$GTF.name_text]?$GTF.RULES[$GTF.COLUMN]['C'][$GTF.name_text]:'');
		$E('g_gtf_column_name_text').style.color = $GTF.RULES[$GTF.COLUMN]['C'][$GTF.fg_color];
		$E('g_gtf_column_color_container').style.color = $GTF.RULES[$GTF.COLUMN]['C'][$GTF.fg_color];
		_E.style.backgroundColor = $GTF.RULES[$GTF.COLUMN]['C'][$GTF.bg_color];

		const oldJoinSelection=$V('g_gtf_column_join_column'), nextColors=$GTF.columnNextColorPair();
		$E('g_gtf_column_join_column_append').innerHTML = options[0];
		$E('g_gtf_column_join_column_prepend').innerHTML = options[1];
		$V('g_gtf_column_join_column', oldJoinSelection);

		columns.forEach((div,n) => {
			if(joins[n]&&joins[n][0])
				joins[n][0].forEach(x => divs += x);
			divs += div;
			if(joins[n]&&joins[n][1])
				joins[n][1].forEach(x => divs += x);

		});
		divs += `<div data-x="${$GTF.RULES.length}" style="color:${nextColors[0]};background-color:${nextColors[1]}">&lt; New Column &gt;</div>`;
		$V('g_gtf_column_color_choices', divs);
	},
	columnReOrder: () => {
		const oldColumn=$GTF.COLUMN;
		$GTF.RULES[$GTF.COLUMN]['_cur'] = true;
		$GTF.RULES = $GTF.RULES.sort((a,b) => (a['C'][$GTF.join_column]?1:0) - (b['C'][$GTF.join_column]?1:0));
		if(typeof($GTF.COLUMN=$GTF.RULES.findIndex(x=>x['_cur'])) == 'number') {
			delete $GTF.RULES[$GTF.COLUMN]['_cur'];
		}
		else
			$GTF.COLUMN = 0;
		if(oldColumn != $GTF.COLUMN)
			$GTF.columnSelect($GTF.COLUMN);
	},
	columnReOrderForJoin: () => {
		let nextJoin=parseInt($V('g_gtf_column_join_column')), shifted=false;
		if(nextJoin && !$GTF.RULES[$GTF.COLUMN]['C'][$GTF.join_column]) {
			if(!$GTF.RULES[$GTF.COLUMN]['C'][$GTF.join_delimiter])
				$V('g_gtf_column_join_delimiter', $GTF.RULES[$GTF.COLUMN]['C'][$GTF.join_delimiter]='\\s');
			if($GTF.COLUMN < Math.abs(nextJoin)) {
				while($GTF.columnShift(1))
					shifted = true;
				if(shifted) {
					$GTF.columnUpdatePulldown();
					$V('g_gtf_column_join_column', nextJoin+(nextJoin<0?1:-1));
				}
			}
			$GTF.columnToggle(true);
		}
		else if(!nextJoin && $GTF.RULES[$GTF.COLUMN]['C'][$GTF.join_column]) {
			const colorPair = $GTF.columnNextColorPair();
			$V('g_gtf_column_fg_color', $GTF.RULES[$GTF.COLUMN]['C'][$GTF.fg_color]=colorPair[0]);
			$V('g_gtf_column_bg_color', $GTF.RULES[$GTF.COLUMN]['C'][$GTF.bg_color]=colorPair[1]);
			$V('g_gtf_column_join_delimiter', $GTF.RULES[$GTF.COLUMN]['C'][$GTF.join_delimiter]='');
		}
	},
	delimiterInput: el => el.value=el.value.replace(' ','\\s').replace("\t",'\\t'),
	colorUpdate: () => $D.body.style.setProperty('--g-gtf-selected-fgcolor', $GTF.RULES[$GTF.COLUMN]['C'][$GTF.fg_color]) || $D.body.style.setProperty('--g-gtf-selected-bgcolor', $GTF.RULES[$GTF.COLUMN]['C'][$GTF.bg_color]),
	columnUpdate: delay => $GTF.columnReOrderForJoin() || $GTF.fieldUpdate('FILTER') || $GTF.fieldUpdate('COLUMN') || $GTF.columnUpdatePulldown() || $GTF.colorUpdate() || $GTF.updateElements(delay),
	filterUpdate: () => $GTF.fieldUpdate('FILTER') || $GTF.filterValueUpdateValidity() || $GTF.updateElements(),
	fieldUpdate: type => {
		$GTF.appendBaseRules();
		$GTF.RULES[$GTF.COLUMN][type[0]] = $GTF.NAMES[type].map(key => {
			const id='g_gtf_'+type.toLowerCase()+'_'+key;
			if(!$E(id))
				return(null);
			else if(key.match(/enabled$/)) {
				const checked=(_E.value=_E.checked?1:0);
				if($E(id+'_container'))
					_E.classList[checked?'add':'remove']('g_gtf_icon_active');
				return(checked);
			}
			else if(key.match(/delimiter$/))
				return($GTF.delimiterInput(_E));
			else if(key.match(/(text|color|delimiter)$/))
				return(_E.value=_E.value.trimLeft());
			else if(!(_E.value=_E.value.trim()) || isNaN(_E.value))
				return(_E.value='0');
			return(_E.value=parseInt(_E.value));
		});
		$GTF.rulerToggle($E('g_gtf_filter_enabled').checked);
	},
	filterPatternList: () => {
		const patterns={}, columns=($GTF.VIEW ? $range($GTF.RULES.length) : [$GTF.COLUMN]);
		for(let c=0; c < columns.length; c++) {
			const column=$GTF.RULES[columns[c]];
			if($isEmpty(column['P']))
				continue;
			Object.keys(column['P']).forEach(r => patterns[r] = {'pattern':column['P'][r],'elements':[],'styles':{}});
		}
		return(patterns);
	},
	filterPatternUpdate: () => {
		const columns=($GTF.VIEW ? $range($GTF.RULES.length) : [$GTF.COLUMN]);
		let rules = {};
		for(let c=0; c < columns.length; c++) {
			const column=$GTF.RULES[columns[c]];
			if($isEmpty(column['P']))
				continue;
			Object.keys(column['P']).forEach(r => rules[r] = {'pattern':column['P'][r],'instance':{'ec':0,'es':0},'elements':[]});
		}
		$A('#g_gtf_editor_data > i[data-pattern]').forEach(x => {
			const pattern=x.dataset.pattern;
			if(rules[pattern])
				rules[pattern].elements.push(x);
		});
		return(rules);
	},
	filterList: column => $GTF.RULES[column] && $GTF.RULES[column]['F'] ? $GTF.NAMES.FILTER.reduce((o,k,i) => ({...o,[k]:$GTF.RULES[column]['F'][i]}),{}) : [],
	filterMatch: (column, vpos, page, value, preText) => {
		if(!$GTF.RULES[column] || !$GTF.RULES[column]['F'])
			return(false);
		const len=value?value.length:0, hpos=preText?preText.length:0, f=$GTF.filterList(column);
		return(f.enabled && (
			(f.len_min>0&&f.len_min>len) || (f.len_max>0&&f.len_max<len) || 
			(f.hpos_min>0&&f.hpos_min>hpos+1) || (f.hpos_max>0&&f.hpos_max<hpos+len) ||
			(f.vpos_min>0&&f.vpos_min>vpos) || (f.vpos_max>0&&f.vpos_max<vpos) || 
			(f.page_min>0&&f.page_min>page) || (f.page_max>0&&f.page_max<page) ||
			(f.value_text&&!$regexTest(f.value_text,value)) || (f.pre_text&&!$regexTest(f.pre_text,preText))
		));
	},
	filterValueToggle: explicit => {
		const toggle=(typeof explicit=='boolean'?!explicit:$E('g_gtf_filter_value_choices').classList.contains('g_show'));
		$E('g_gtf_filter_value_choices').classList[toggle?'remove':'add']('g_show');
		if($E('g_gtf_editor_data_ruler'))
			_E.classList[toggle?'remove':'add']('g_has_filter_pulldown');
	},
	filterTextFocus: focused => {
		let val=$E('g_gtf_filter_value_text').value.trim(), find=null;
		if(find=Object.entries($DAT.REGEXES).find(x => x[focused?0:1] == val))
			_E.value = find[focused?1:0];
	},
	filterValueSelect: label => {
		$V('g_gtf_filter_value_text', $DAT.REGEXES[label]);
		$V('g_gtf_filter_value_replace_text', '');
		$GTF.filterPlaceholderUpdate(label);
		$GTF.filterValueToggle(false);
		$GTF.filterTextFocus(false);
		$GTF.filterUpdate();
	},
	filterPlaceholderUpdate: label => {
		const val=(label===null?$E('g_gtf_filter_value_text').value:label);
		$E('g_gtf_filter_value_replace_text').placeholder = '[ replace with ]';
		if($DAT.REGEXES[val])
			_E.placeholder = $GTF.filterPlacholderFormat(val);
	},
	filterPlacholderFormat: str => {
		let param=0;
		return(str.replace(/[\u{0080}-\u{FFFF}]/gu,'').trim().replace(/\{[^}]+}/g, () => `{${++param}}`));
	},
	filterValueUpdateValidity: () => {
		const val=$V('g_gtf_filter_value_text'), hasError=$regexTest(val,'')===null;
		_V.classList[hasError?'add':'remove']('g_error_text');
	},
	appendBaseRules: column => {
		if(!$GTF.RULES || !$GTF.RULES.length)
			$GTF.RULES = $GTF.rulesBase();
		if(typeof column == 'number' && !$GTF.RULES[column])
			$GTF.RULES[column] = $GTF.ruleBase();
		if(typeof $GTF.COLUMN == 'number' && $GTF.COLUMN >= 0 && !$GTF.RULES[$GTF.COLUMN])
			$GTF.RULES[$GTF.COLUMN] = $GTF.ruleBase();
		$GTF.RULES.forEach((x,i) => {
			if(!$GTF.RULES[i])
				$GTF.RULES[i] = $GTF.ruleBase();
		});
	},
	rulerWidthHTML: (width, html) => {
		let widthRuler='<u data-x="@P1">#1</u>';
		for(let w=1; w <= width; w++)
			widthRuler += '<u data-x="@W'+w+'">|</u>';
		return('<div id="g_gtf_editor_data_ruler">' + widthRuler + '</div>' + (html?html:''));
	},
	rulerToggle: enabled => {
		const show=!$GTF.VIEW&&enabled;
		if(!$E('g_gtf_editor').classList.contains('g_ruler') && enabled)
			$GTF.updateRuler();
		$E('g_gtf_editor').classList[show?'add':'remove']('g_ruler');
		$E('g_gtf_filter_view_display').classList[!show?'add':'remove']('g_show');
		$E('g_gtf_filter_edit_display').classList[show?'add':'remove']('g_show_flex');
		if(enabled)
			$GUI.tooltipClear(true);
	},
	rulerClick: id => {
		if(!id)
			return;
		let min='', max='', pos=parseInt(id.substr(2)), f=$GTF.filterList($GTF.COLUMN);
		switch(id[1]) {
			case 'W': min='hpos_min'; max='hpos_max'; break;
			case 'H': min='vpos_min'; max='vpos_max'; break;
			case 'P': min='page_min'; max='page_max'; break;
			default: return;
		}
		if(!pos)
			['hpos_min','hpos_max','vpos_min','vpos_max'].forEach(v => $V('g_gtf_filter_'+v, '0'));
		else if(f[min] && f[max]) {
			$V('g_gtf_filter_'+min, '0');
			$V('g_gtf_filter_'+max, '0');
		}
		else if(!f[min])
			$V('g_gtf_filter_'+min, pos);
		else/* if(!f[max])*/
			$V('g_gtf_filter_'+max, pos);
		$GTF.filterUpdate();
	},
	updateRuler: () => {
		const f=$GTF.filterList($GTF.COLUMN), us=$E('g_gtf_editor_data').getElementsByTagName('u');
		for(let u=0,p=0; u < us.length; u++) {
			if(!$X(us[u]) || _X.length < 3)
				continue;
			const x=us[u], i=parseInt(_X.substr(2));
			switch(_X[1]) {
				case 'W':
					if(!f.hpos_min && !f.hpos_max) {
						x.className = '';
						x.innerText = '+';
					}
					else if(f.hpos_min>0 && f.hpos_min>i || f.hpos_max>0&&f.hpos_max<i) {
						x.className = 'g_filtered';
						x.innerText = '-';
					}
					else {
						x.className = 'g_unfiltered';
						x.innerText = '+';
					}
					break;
				case 'P':
					if(!f.page_min && !f.page_max)
						x.className = '';
					else if(f.page_min>0 && f.page_min>i || f.page_max>0&&f.page_max<i)
						x.className = 'g_filtered';
					else
						x.className = 'g_unfiltered';
					p = i;
					break;
				case 'H':
					if(f.page_min>0 && f.page_min>p || f.page_max>0&&f.page_max<p) {
						x.className = 'g_filtered';
						x.innerText = '##';
					}
					else if(!f.vpos_min && !f.vpos_max) {
						x.className = '';
						x.innerText = '++';
					}
					else if(f.vpos_min>0 && f.vpos_min>i || f.vpos_max>0&&f.vpos_max<i) {
						x.className = 'g_filtered';
						x.innerText = '--';
					}
					else {
						x.className = 'g_unfiltered';
						x.innerText = '++';
					}
					break;
			}
		}
	},
	updateElements: delay => {
		if(typeof delay == 'number') {
			if($GTF.UPDATE_TIMEOUT)
				clearTimeout($GTF.UPDATE_TIMEOUT);
			return($GTF.UPDATE_TIMEOUT=setTimeout($GTF.updateElements, delay));
		}
		else
			$GTF.UPDATE_TIMEOUT = null;

		let gtf, t, tags, colorIdx, groupIdx, excludeIdx, filterIdx, patternList, regexMap={}, wildIds=[], rowCount=0, pageNum=1, line='', columns=($GTF.VIEW?Object.keys($GTF.RULES):[$GTF.COLUMN]);;
		$GTF.appendBaseRules();

		if(!(tags=$A('#g_gtf_editor_data > I, #g_gtf_editor_data > P, #g_gtf_editor_data > S')))
			return;

		$E('g_gtf_editor_data').classList.add('g_gtf_editor_hide_groups');
		patternList = $GTF.filterPatternList();
		for(t of tags) {
			if(t.lastChild && t.lastChild.tagName=='B')
				t.removeChild(t.lastChild);
			if($X(t) == '!') {
				line = '';
				rowCount++;
			}
			else if(_X == '#') {
				pageNum++;
				rowCount = 0;
			}
			else
				line += t.innerText;

			if(t.tagName!='I' || _X == '#' || !(gtf=$GTF.strToObj(_X)))
				continue;

			filterIdx = excludeIdx = groupIdx = colorIdx = -1;
			for(let c of columns) {
				if(!$GTF.RULES[c]['R'])
					continue;
				else if($I($GTF.RULES[c]['R'],gtf.id) >= 0)
					colorIdx = c;
				else {
					for(let s of $GTF.RULES[c]['R']) {
						if((regexMap[s]||(regexMap[s]=$GTF.ruleEncode(s))) && regexMap[s].test(gtf.id))
							groupIdx = colorIdx = c;
					}
				}

				if($GTF.RULES[c]['E'] && $I($GTF.RULES[c]['E'],gtf.id) >= 0)
					excludeIdx = c;

				if(colorIdx >= 0) {
					if($GTF.RULES[c]['E'] && $I($GTF.RULES[c]['E'],gtf.id) >= 0) {
						if($GTF.VIEW)
							colorIdx = -1;
						excludeIdx = c;
					}
					else if($GTF.filterMatch(colorIdx, rowCount+1, pageNum, t.innerText, line.slice(0,-t.innerText.length)))
						filterIdx = c;
					else {
						excludeIdx = filterIdx = -1;
						break;
					}
				}
			}
			t.style = '';
			if($GTF.VIEW && (excludeIdx >= 0 || filterIdx >= 0))
				continue;
			else if(excludeIdx >= 0)
				t.style = `color:${$GTF.EXCLUDE_COLORS[0]};background-color:${$GTF.EXCLUDE_COLORS[1]};`;
			else if(filterIdx >= 0)
				t.style = `color:${$GTF.RULES[filterIdx]['C'][$GTF.fg_color]};background-color:${$GTF.EXCLUDE_COLORS[1]};`;
			else if(colorIdx >= 0)
				t.style = `color:${$GTF.RULES[colorIdx]['C'][$GTF.fg_color]};background-color:${$GTF.RULES[colorIdx]['C'][$GTF.bg_color]};`;
			if($GTF.VIEW)
				t.dataset.y = colorIdx >= 0 ? colorIdx : '';
			if(filterIdx >= 0)
				continue;
			else if(excludeIdx >= 0 && !$GTF.VIEW) {
				const b=document.createElement('b');
				b.innerHTML = '&#x270E;';
				b.title = 'Excluded';
				b.className = 'g_gtf_rule_excluded';
				b.style.borderRightColor = $GTF.EXCLUDE_COLORS[0];
				t.appendChild(b);
			}
			else if(groupIdx >= 0) {
				const wildId=gtf.type+gtf.col+'@'+gtf.row+'.*', hasPatternRules=$GTF.RULES[groupIdx]['P']&&$GTF.RULES[groupIdx]['P'][wildId], b=document.createElement('b');
				if(!$GTF.VIEW) {
					if($I(wildIds, wildId) < 0) {
						_I = wildIds.length;
						wildIds.push(wildId);
					}
					b.innerHTML = '&#x270E;';
					b.style.borderRightColor = $GTF.GROUP_COLORS[_I%$GTF.GROUP_COLORS.length];
					b.className = hasPatternRules ? 'g_gtf_rule_edit g_gtf_has_pattern_rules' : 'g_gtf_rule_edit';
					b.title = hasPatternRules ? 'Patterned group controls' : 'Create group pattern';				
					t.appendChild(b);
				}
				if(hasPatternRules && patternList[wildId]) {
					if(!patternList[wildId].styles['exclude'])
						patternList[wildId].styles['exclude'] = `color:${$GTF.RULES[groupIdx]['C'][$GTF.fg_color]};background-color:${$GTF.EXCLUDE_COLORS[1]};`;
					patternList[wildId].elements.push(t);
				}
			}
		}
		for (const pattern of Object.values(patternList)) {
			let ec=0, es=0, x=0, el=null, rules=$Z($GTF.NAMES.PATTERN, pattern.pattern), style=!$GTF.VIEW&&pattern.styles['exclude']?pattern.styles['exclude']:'';
			if((x=parseInt(rules.skip_rows)) > 0) {
				while(pattern.elements.length && --x >= 0 && (el=pattern.elements.shift()))
					el.style = style;
			}
			if((x=parseInt(rules.trim_rows)) > 0) {
				while(pattern.elements.length && --x >= 0 && (el=pattern.elements.pop()))
					el.style = style;
			}
			if((ec=parseInt(rules.every_count)) > 0 && (es=parseInt(rules.every_skip)) > 0) {
				for (let j=ec; (x=pattern.elements.splice(j,es)).length; j+=ec)
					x.forEach(el => el.style = style);
			}
			if($GTF.VIEW && (x=parseInt(rules.join_modulo)) > 0) {
				ec = 0;
				pattern.elements.forEach(el => {
					const b=document.createElement('b');
					if(x==1)
						b.innerHTML = '&#x2195;';
					else if(!ec++)
						b.innerHTML = '&#x2B10;';
					else if(ec == x) {
						b.innerHTML = '&#x2B11;';
						ec = 0;
					}
					else
						b.innerHTML = '&#x2847;';
					b.className = 'g_gtf_rule_pattern_view_mode';
					b.title = (x==1 ? 'Inferred patterned group' : 'Patterned group every '+x+' rows');
					el.appendChild(b);
				});
			}
		}
		$GTF.updateRuler();
		setTimeout(() => {
			$E('g_gtf_editor_data').classList.remove('g_gtf_editor_hide_groups');
			$GTF.scrollFix();
		}, 500);
	},
	setMode: mode => {
		if(!mode) return;
		$GUI.tooltipClear(true);
		$A('#g_gtf_mode_group > .g_gtf_icon').forEach(x => {
			if(!$X(x)) return;
			const active=(_X==mode);
			x.classList[active?'add':'remove']('g_gtf_icon_active');
			$GTF[_X.toUpperCase()] = active;
			$E('g_gtf_editor_data').classList[active?'add':'remove']('g_gtf_mode_'+_X);
		});
		$E('g_gtf_view_display').classList[$GTF.VIEW?'add':'remove']('g_show');
		$E('g_gtf_edit_display').classList[!$GTF.VIEW?'add':'remove']('g_show_flex');
		$GTF.rulerToggle($E('g_gtf_filter_enabled').checked);
		$GTF.updateElements();
	},
	ruleEdit: _ => {
		$GTF.appendBaseRules($GTF.COLUMN);
		const show=_&&!_.el.classList.contains('g_gtf_rule_active'), ruleId=$GTF.strToWildcard(_?_.x:$V('g_gtf_pattern_rule_id')), currentRules=ruleId&&$GTF.RULES[$GTF.COLUMN]['P']&&$GTF.RULES[$GTF.COLUMN]['P'][ruleId];
		let ruleSkipRows=$V('g_gtf_pattern_skip_rows'), ruleTrimRows=$V('g_gtf_pattern_trim_rows'), ruleEveryCount=$V('g_gtf_pattern_every_count'), ruleEverySkip=$V('g_gtf_pattern_every_skip'), ruleJoinModulo=$V('g_gtf_pattern_join_modulo'), ruleJoinDelimiter=$V('g_gtf_pattern_join_modulo_delimiter');
		if(show && currentRules) {
			ruleSkipRows = currentRules[$GTF.skip_rows]; ruleTrimRows = currentRules[$GTF.trim_rows];
			ruleEveryCount = currentRules[$GTF.every_count]; ruleEverySkip = currentRules[$GTF.every_skip];
			ruleJoinModulo = currentRules[$GTF.join_modulo]; ruleJoinDelimiter = currentRules[$GTF.join_modulo_delimiter];
		}
		$A('.g_gtf_rule_edit').forEach(x => x.style.zIndex = 0);
		$A('.g_gtf_pattern_edit').forEach(x => x.remove());
		$A('.g_gtf_rule_active').forEach(x => x.classList.remove('g_gtf_rule_active'));

		if(_)
			_.el.classList[show?'add':'remove']('g_gtf_rule_active');
		if(!show) {
			if(!ruleId)
				return;
			if(!$GTF.RULES[$GTF.COLUMN]['P'])
				$GTF.RULES[$GTF.COLUMN]['P'] = {};
			if(0 < ruleJoinModulo || 0 < ruleSkipRows || 0 < ruleTrimRows || 0 < ruleEverySkip)
				$GTF.RULES[$GTF.COLUMN]['P'][ruleId] = [ruleSkipRows, ruleTrimRows, ruleEveryCount, ruleEverySkip, ruleJoinModulo, ruleJoinDelimiter];
			else
				delete $GTF.RULES[$GTF.COLUMN]['P'][ruleId];
			$GTF.updateElements();
			return;
		}
		_.el.style.zIndex = 2;
		let html=`<input type="hidden" id="g_gtf_pattern_rule_id" value="${ruleId}" />`, div=document.createElement('div'), styles;
		html += `Skip first <select id="g_gtf_pattern_skip_rows">`;
		for(let i=0; i < 50; i++)
			html += `<option value="${i}" ${ruleSkipRows==i?' selected="selected"':''}>${i} row${i==1?'':'s'}</option>`;
		html += `</select>, Trim last <select id="g_gtf_pattern_trim_rows">`;
		for(let i=0; i < 50; i++)
			html += `<option value="${i}" ${ruleTrimRows==i?' selected="selected"':''}>${i} row${i==1?'':'s'}</option>`;
		html += `</select><hr />After every <select id="g_gtf_pattern_every_count">`;
		for(let i=1; i < 50; i++)
			html += `<option value="${i}" ${ruleEveryCount==i?' selected="selected"':''}>${i} row${i==1?'':'s'}</option>`;
		html += `</select> skip over <select id="g_gtf_pattern_every_skip">`;
		for(let i=0; i < 50; i++)
			html += `<option value="${i}" ${ruleEverySkip==i?' selected="selected"':''}>${i} row${i==1?'':'s'}</option>`;
		html += `</select><hr />Join <select id="g_gtf_pattern_join_modulo"><option value="0">[${ruleJoinModulo>0?'No occurrences / disable':'Row occurrences'}]</option>`;
		for(let i=1; i < 10; i++)
			html += `<option value="${i}" ${ruleJoinModulo==i?' selected="selected"':''}>${i==1?'Inferred consecutive rows':(i+' consecutive rows')}</option>`;
		html += `</select>`;
		html += ` with <input id="g_gtf_pattern_join_modulo_delimiter" type="text" size="3" value="${$H(currentRules?ruleJoinDelimiter:'\\s')}" placeholder="[SEP]" oninput="$GTF.delimiterInput(this)" />`;
		div.className = 'g_gtf_pattern_edit';
		if((styles=$W.getComputedStyle(_.el)) && styles.getPropertyValue('border-right-width'))
			div.style.borderLeft = styles.getPropertyValue('border-right');
		div.innerHTML = html;
		_.el.appendChild(div);
	},
	strToWildcard: str => (str?str:'').replace(/\.[0-9]+$/,'.*'),
	strToObj: str => ($M(/^(.+)([0-9])+@([0-9A-Z]+)\.([0-9]+)$/, str) ? {'id':_M[0],'type':_M[1],'col':_M[2],'row':_M[3],'inc':_M[4]} : null),
	objToStr: obj => (typeof obj=='object' ? `${obj.type}${obj.col}@${obj.row}.${obj.inc}` : {}),
/*
[ "PERCENT0@15.0", "PERCENT0@15.2", "PERCENT0@15.*" ]

if group mode:
	wipe PERCENT0@15.*
if individual
	check for '*' and ignore click
*/
	iconClick: e => {
		for(let el=(e&&e.target?e.target:e),m=null; el && !!el.parentElement; el=el.parentElement) {
			if(!el || !el.classList || !el.classList.contains('g_gtf_icon'))
				continue;
			if(!el.id || !(m=el.id.match(/^(.+)_container$/)) || !($E(m[1])))
				break;
			if(typeof _E.checked == 'boolean') {
				el.classList[_E.checked?'add':'remove']('g_gtf_icon_active');
				_E.click();
			}
			break;
		}
	},
	click: _ => {
		const id=_.x, fullId=(id&&$GTF.GROUP?id.replace(/[0-9]+$/,'*'):id), x=_.e.pageX-_.el.offsetLeft, y=_.e.pageY-_.el.offsetTop, dx=x-$GTF.mouse.x, dy=y-$GTF.mouse.y, d=Math.sqrt(dx*dx+dy*dy);
		if(!id || d > 20)
			return;
		else if($GTF.VIEW) {
			if(_.y) {
				$GTF.setMode('group');
				$GTF.columnSelect(_.y);
			}
			else
				$GUI.alert('The editor is currently in view mode; click on a selection mode or an existing highlighted item to edit.')
			return;
		}
		else if(id[0] == '@')
			return($GTF.rulerClick(id));
		$GTF.appendBaseRules($GTF.COLUMN);
		if($GTF.EXCLUDE) {
			if($I($GTF.RULES[$GTF.COLUMN]['E'],fullId) >= 0)
				$GTF.RULES[$GTF.COLUMN]['E'].splice(_I,1);
			else
				$GTF.RULES[$GTF.COLUMN]['E'].push(fullId);
		}
		else {
			const test=fullId.replace(/\*$/,''), filtered=$GTF.RULES[$GTF.COLUMN]['R'].filter(x => test != x.substr(0,test.length));
			if(filtered.length != $GTF.RULES[$GTF.COLUMN]['R'].length)
				$GTF.RULES[$GTF.COLUMN]['R'] = filtered;
			else
				$GTF.RULES[$GTF.COLUMN]['R'].push(fullId);
		}
		$GTF.updateElements();
	},
	mouse: {
		x:0, y:0, left:0, top:0, dragging:false,
		down: e => {
			if(!$E('g_gtf_editor_data'))
				return;
			$GTF.mouse.dragging = true;
			$GTF.mouse.x = e.pageX - _E.offsetLeft;
			$GTF.mouse.y = e.pageY - _E.offsetTop;
			$GTF.mouse.left = _E.scrollLeft;
			$GTF.mouse.top = _E.scrollTop;
			_E.style.cursor = 'grabbing';
		},
		move: e => {
			if(!$GTF.mouse.dragging || !$E('g_gtf_editor_data'))
				return;
			e.preventDefault();
			_E.scrollLeft = $GTF.mouse.left - ((e.pageX-_E.offsetLeft) - $GTF.mouse.x);
			_E.scrollTop = $GTF.mouse.top - ((e.pageY-_E.offsetTop) - $GTF.mouse.y);
		},
		up: e => {
			if(!$GTF.mouse.dragging)
				return;
			$GTF.mouse.dragging = false;
			if($E('g_gtf_editor_data'))
				_E.style.cursor = 'grab';
		}
	}
},


/*************************************************************************************************\
\*******  TIMER / POLLING LOGIC  *********************************************  [ $DB.* ]  *******/
POL: {
	INTERVAL:null, INTERVALS:{}, COUNT:0,

	setup: () => $POL.INTERVAL = setInterval($POL.interval, 1000),
	interval: () => ++$POL.COUNT && Object.entries($POL.INTERVALS).forEach(a => !($POL.COUNT%a[1]) && $POL[a[0]] && $POL[a[0]]()),
	start: (timer, secs) => ($POL.COUNT=0) || ($POL.INTERVALS[timer]=secs),
	stop: timer => delete $POL.INTERVALS[timer],

	loaded: () => {
		$POL.stop('loaded');
		if($E('g_top').classList.contains('g_top_complete'))
			return;
		$GUI.aboutRestart(true);
		setTimeout(() => $E('g_top').classList.add('g_top_complete'), 2000);
	},
	about: () => {
		if($GUI.MENU!='about')
			return($POL.stop('about'));
		for(let i=1, j=Math.floor(Math.random()*($GTF.GROUP_COLORS.length-3)); i < 4; i++) 
			$D.body.style.setProperty('--g-about-color-'+i, $GTF.GROUP_COLORS[j+i]);
		$GUI.aboutRestart(false, true);
	},
	parses: () => {
		if(!$DAT.PARSER)
			return($POL.stop('parses'));
		else if($GUI.PARSER_MENU=='parse')
			$NET.parses($DAT.PARSER, true);
	},
	issue: () => {
		if($GUI.MENU != 'issues' || !$DAT.ISSUE)
			return($POL.stop('issue'));
		$NET.issue($DAT.ISSUE, $DAT.ISSUE_LAST);
	},
	tooltips: () => $GUI.tooltipOnScreenUpdate(),
},


/*************************************************************************************************\
\*******  LOCAL STORAGE LOGIC  ***********************************************  [ $DB.* ]  *******/
DB: {
	DB:{},

	setup: () => $DB.DB = localStorage.getItem('gristle') ? JSON.parse(localStorage.getItem('gristle')) : {},
	set: (key, value) => {
		$DB.DB[key] = value;
		$DB.save();
	},
	get: key => typeof $DB.DB[key] == 'undefined' ? null : $DB.DB[key],
	remove: key => delete $DB.DB[key] && $DB.save(),
	save: () => localStorage.setItem('gristle', JSON.stringify($DB.DB)),
	clear: () => !localStorage.setItem('gristle', JSON.stringify($DB.DB={})) && !$DB.save()
},


/*************************************************************************************************\
\*******  MISCELLANEOUS HELPERS  ************************************************  [ $* ]  *******/

objectCompare: (a, b) => {
	if (a===b) return(true);
	if (a instanceof Date && b instanceof Date) return(a.getTime()===b.getTime());
	if (!a || !b || (typeof a!=='object' && typeof b!=='object')) return(a===b);
	if (a===null || a===undefined || b===null || b===undefined) return(false);
	if (a.prototype !== b.prototype) return(false);
	const keys = Object.keys(a);
	if (keys.length !== Object.keys(b).length) return(false);
	return(keys.every(k => $objectCompare(a[k],b[k])));
},
regexTest: (exp, text) => {
	try { return(new RegExp($DAT.REGEXES[exp] ? $DAT.REGEXES[exp] : exp).test(text)); }
	catch { return(null); }
},
isEmpty: x => {
	if(typeof x != 'object') return(!x);
	for(let i in x) return(false);
	return(true);
},
objectClone: obj => typeof structuredClone=='function' ? structuredClone(obj) : JSON.parse(JSON.stringify(obj)),
nth: n => n + (['st','nd','rd'][(((n<0?-n:n)+90)%100-10)%10-1]||'th'),
range: (count, start) => Array(count).fill(start?start:0).map((x, y) => x + y),
basename: path => path.replace(/^.*\//,''),
minMax: (num, min, max) => Math.min(Math.max(parseInt(num?num:0), min), max),
sizeDisplay: (num, unit, units) => (num<unit||units.length<2) ? [Math.round(num,0),units[0]].join('') : $sizeDisplay(num/unit,unit,units.slice(1)),
dateDisplay: epoch => epoch > 0 ? new Date(epoch*1000).toLocaleString() : '[TBD]',
capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),
altKey: () => ['altKey','ctrlKey','shiftKey'].find(k => $W.event && $W.event[k]),
scrollToTop: (el, smooth) => (el.scrollTop ? el.scrollTo({top: 0, behavior: smooth?'smooth':'auto'}) : false) !== false,
epochNow: () => Math.floor(Date.now() / 1000),
isMobile: () => /iphone|ip[ao]d|android/i.test(navigator.userAgent),
isVisible: el => el && el.offsetParent!==null && getComputedStyle(el).visibility!=='hidden' && getComputedStyle(el).opacity!=='0',
parserName: n => n.replace(/(\b[a-z](?!\s))/g, s => s.toUpperCase()).replace(/[^A-Z0-9]+/ig,'-').replace(/(^-|-$)/g,'').replace(/^$/,'Parser-'+($DAT?.PARSERS?.length??0+1))
} /* EOF */
