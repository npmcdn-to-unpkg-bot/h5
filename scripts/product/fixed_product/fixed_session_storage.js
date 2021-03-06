var fixedProductSessionStorageUtils = {
	//---------------regular target -------------------
	setSelectedRegularTarget : function (selectedRegularTarget){
		sessionStorage.setItem("selectedRegularTarget", JSON.stringify(selectedRegularTarget));
	},
	getSelectedRegularTarget : function (){
		return JSON.parse(sessionStorage.getItem("selectedRegularTarget"));
	},
	
	//---------------money coupon id -------------------
	setSelectedMoneyCouponId : function (selectedMoneyCouponId){
		sessionStorage.setItem("selectedMoneyCouponId", JSON.stringify(selectedMoneyCouponId));
	},
	
	getSelectedMoneyCouponId : function (){
		return JSON.parse(sessionStorage.getItem("selectedMoneyCouponId"));
	},
	
	setSelectedMoneyCouponValue : function (selectedMoneyCouponValue){
		sessionStorage.setItem("selectedMoneyCouponValue", JSON.stringify(selectedMoneyCouponValue));
	},
	
	getSelectedMoneyCouponValue : function (){
		return JSON.parse(sessionStorage.getItem("selectedMoneyCouponValue"));
	},
	setAllowMoneyCoupons : function(allowMoneyCoupons){
		sessionStorage.setItem("allowMoneyCoupons", JSON.stringify(allowMoneyCoupons));
	},
	getAllowMoneyCoupons : function(){
		return JSON.parse(sessionStorage.getItem("allowMoneyCoupons"));
	},
	//---------------rate coupon id -------------------
	setSelectedRateCouponId : function (selectedRateCouponId){
		sessionStorage.setItem("selectedRateCouponId", JSON.stringify(selectedRateCouponId));
	},
	getSelectedRateCouponId : function (){
		return JSON.parse(sessionStorage.getItem("selectedRateCouponId"));
	},
	setAllowRateCoupons : function(allowRateCoupons){
		sessionStorage.setItem("allowRateCoupons", JSON.stringify(allowRateCoupons));
	},
	getAllowRateCoupons : function(){
		return JSON.parse(sessionStorage.getItem("allowRateCoupons"));
	},
	

	
	setSelectedRateCouponYearRate : function (selectedRateCouponYearRate){
		sessionStorage.setItem("selectedRateCouponYearRate", JSON.stringify(selectedRateCouponYearRate));
	},
	getSelectedRateCouponYearRate : function (){
		return JSON.parse(sessionStorage.getItem("selectedRateCouponYearRate"));
	},
	
	//---------------user input amount -------------------
	setBuyAmount : function(buyAmount){
		sessionStorage.setItem("buyAmount", JSON.stringify(buyAmount));
	},
	getBuyAmount : function(){
		return JSON.parse(sessionStorage.getItem("buyAmount"));
	},
	
	
	
	
	clearAll:function(){
		sessionStorage.setItem("selectedRegularTarget", null);
		sessionStorage.setItem("selectedMoneyCouponId", null);
		sessionStorage.setItem("selectedMoneyCouponValue", null);
		sessionStorage.setItem("selectedRateCouponId", null);
		sessionStorage.setItem("selectedRateCouponYearRate", null);
		sessionStorage.setItem("allowMoneyCoupons", null);
		sessionStorage.setItem("allowRateCoupons", null);
		sessionStorage.setItem("buyAmount", null);
	}
}




