
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CJwQv79s.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.DoUafInF.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.hFyRpHXG.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.DgLKpZ4O.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-is-shop-pay-active-legacy.ji93N7oF.js","/cdn/shopifycloud/checkout-web/assets/c1/types-UnauthenticatedErrorModalPayload-legacy.DMKVMlUJ.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.BW3R3WiF.js","/cdn/shopifycloud/checkout-web/assets/c1/context-utilities-legacy.qfaBhfCJ.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer-legacy.CoC-wt8-.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound-legacy.C4DOF8VI.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-unactionable-errors-legacy.CzTCxOJn.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress-legacy.CaxSgdvS.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-getCommonShopPayExternalTelemetryAttributes-legacy.Cy4WSqK0.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion-legacy.C5R-cI51.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery-legacy.T1VrKMhX.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors-legacy.B0TMEge9.js","/cdn/shopifycloud/checkout-web/assets/c1/types-index-legacy.Cwyym9U9.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.o6YIYhNh.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.JEtmpDax.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.AVj1dGsg.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks-legacy.CCHA8qIC.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.DBR9bpl-.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer-legacy.DqGNspYr.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.vbOtzqjP.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.DF21evU0.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox-legacy.Db68yhxd.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal-legacy.BK9TlegN.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.t21QkhJY.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index-legacy.Dt7M4UuL.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.BjLlZzoZ.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.ClRskubF.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.9vxdEAOU.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.JBdnOxLS.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod-legacy.CrhfZmQd.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.DkUM9SqS.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo-legacy.oRWGO37f.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.hTFND9f7.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.DSEKo65J.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowCreateMoreAccountsGdprTreatment-legacy.D0bkvimD.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.CjPJb3mi.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.DilMg3j7.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit-legacy.DcEZ-Jng.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner-legacy.CaIigtcV.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input-legacy.O1npz9zH.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-constants-legacy.CXZMbuKn.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.CeLCXyTr.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.C6k_4aB8.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.BuzqBEB2.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.BxWjfS7g.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.BWpv1V9M.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options-legacy.BltLhV1R.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.BoHIGYTx.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.Bv2gnrg8.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSubscribeMessenger-legacy.nraPnURF.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  