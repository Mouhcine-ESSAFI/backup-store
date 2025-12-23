
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.id56y8qt.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.CVtZXpP_.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-es-legacy.BCma8Sz2.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.BwNbaJHO.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.C_1DdOnT.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.DFa_a7Ka.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.BG6XXIar.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.BWYLyMDx.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList-legacy.vGJ7A-KG.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup-legacy.CYMJOz9b.js","/cdn/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation-legacy.DSNvU3i0.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.XEfzhXPf.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.DaQsUWPz.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressManager-legacy.DT4uSJuu.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayPaymentRequiredMethod-legacy.DC5RFglA.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.iwBcihcM.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.Ab75kHh0.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.DZ_7jaSm.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.D7dclKHR.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.pC0jLQLe.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.Yf5PyTdc.js","/cdn/shopifycloud/checkout-web/assets/c1/index-legacy.D6vQOFQw.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0654/7836/1302/files/descubredesierto_x320.png?v=1654281895"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
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
  