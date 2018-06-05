//  ***根据是否含有二级目录添加向右箭头*****
$('.level1').each(function() {
	var level2_li_length = $(this).children('ul').find('li').length;
	if (level2_li_length != 0) {
		$(this).children('.level1 .level1-a').find('.right-arrow').stop(true).show(0);
	}
});
//  ***左侧一级目录点击*****
$('#main_menu').on('click', '.level1-a', function() {
	var level2_li_length = $(this).siblings('ul').find('li').length;
	if (level2_li_length != 0) {
		$(this).children('span').toggleClass('down-arrow')
			.parent().next().stop(true).slideToggle(300)
		.parent().siblings().children('a').children('span').removeClass('down-arrow')
			.parent().next().stop(true).slideUp(300);
	} else {
		$(this).addClass('level1-a-cur')
			.parent().siblings().children('a').removeClass('level1-a-cur')
		.next().stop(true).slideUp(300)
			.parent().find('a').removeClass('cur');

		var folder_name = $(this).data('folder_name');
		var file_name = $(this).data('file_name');
		$("#content_box").attr('src', "../" + folder_name + "/" + file_name + ".php");
	}
});

// **左侧二级目录点击****
$('#main_menu').on('click', '.level2 li a', function() {
	var li_node_length = $(this).closest('ul').find('li').length;
	if (li_node_length > 1) {
		$(this).addClass('cur').parent().siblings().children().removeClass('cur')
			.closest('.level1').siblings().children('.level1-a').removeClass('level1-a-cur')
		.siblings('.level2').find('a').removeClass('cur');
	}
	publicSkipPageFunc($(this));
	
});

// ***公共页面跳转函数***
function publicSkipPageFunc(obj) {
	var folder_name = obj.data('folder_name');
	var file_name = obj.data('file_name');
	$("#content_box").attr('src', "../" + folder_name + "/" + file_name + ".php");
}


// ***页面中的公共跳转***
$(document).on('click', '.public-skip', function() {
	publicSkipPageFunc($(this));
});

// ***打开对话框***
$(document).on('click', '.public-open-dialog', function() {
	$('#your-modal').modal('open');
	publicDialogSkipPageFunc($(this));
	
});
// ***对话框中的公共跳转函数***
function publicDialogSkipPageFunc(obj) {
	var folder_name = obj.data('folder_name');
	var file_name = obj.data('file_name');
	$("#your-modal").load("../" + folder_name + "/" + file_name + ".php");
}

// ***点击取消关闭对话框***
$(document).on('click', '.public-cancel-btn', function() {
	$('#your-modal').modal('close');
});

// 文本框通用清空
$(document).on('focus', '.textClear', function() {
	$(this).addClass("focus");
	if ($(this).val() == this.defaultValue) {
		$(this).val("");
	}
});
$(document).on('blur', '.textClear', function() {
	console.log(111);
	$(this).removeClass("focus");
	if ($(this).val() == "") {
		$(this).val(this.defaultValue);
	}
});

// ***下拉框样式调用***
function callSelectStyleFunc() {
	$('.select-style').selected({
		btnSize: 'sm',
    	btnStyle: 'default'
	});
}

// ***通用复选框单选框样式调用***
function checkboxRadioStyleFunc() {
	$("input[type='checkbox'], input[type='radio']").uCheck();
}

// ****获取当前一级目录位置*****
window.onload = function() {
    $(location.hash).click().parent().parent().prev().click();
};

// ***消息-通知类型切换***
function Cmd(val) {
	if (val == 'default_val') {
		$('.default-pic').stop(true).show(0)
			.siblings('.public-filter-content').stop(true).hide(0);
	} else {
		$('.default-pic').stop(true).hide(0)
			.siblings('.public-filter-content').stop(true).show(0);
		$('#filter_' + val).stop(true).show(0)
			.siblings('.filter-content-list').stop(true).hide(0);
	}
	
}
// 员工管理 新增员工、编辑员工的2个橙色按钮之间点击相互切换
$(document).on('click', '.div-label label input', function() {
	$(this).parent().addClass('cur').siblings().removeClass('cur');
});
// 员工管理新增员工、编辑员工的选择大区弹窗单个点击选择
$(document).on('click', '.tr-check-single', function() {
	var $cr_single = $(this).find('.input-check-single');
	var cr_single = $cr_single.get(0);
	console.log(222);
	if (!cr_single.checked) {
		$cr_single.prop('checked', true);
		$cr_single.siblings('span').addClass('checkbox-checked')
			.closest('tr').addClass('tr-orange-clolor');
	} else {
		$cr_single.removeAttr('checked');
		$cr_single.siblings('span').removeClass('checkbox-checked')
			.closest('tr').removeClass('tr-orange-clolor');
	}
});