module.exports = {
    HTML:function(title, body, data){
      return `
      <!DOCTYPE HTML>
    
      <html lang="ko">
      
      <head>
      
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>${title}</title>
      
          <!-- Latest compiled and minified CSS -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
      
          <!-- Google Font -->
          <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Raleway:400,300,500,700,600'
              rel='stylesheet' type='text/css'>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"
              type="text/css">
      
          <!-- Theme Stylesheet -->
          <link rel="stylesheet"  href="/css/style.css">
          <link rel="stylesheet" href="/css/responsive.css">
      
          <!--  부트스트랩 js 사용 -->
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script type="text/javascript" src="/js/bootstrap.js"></script>
      
      </head>
      
      <body>
      <div class="header">
              <div class="container">
                  <div class="row">
                      <div class="col-md-3 col-sm-4">
                          <div class="logo">
                              <a href="/">
                                  <img src="/images/logo.png" alt="plAce">
                              </a>
                          </div>
                      </div>
                      <div class="col-md-7 col-sm-5">
                          <div class="search-form">
                              <form class="navbar-form" role="search">
                                  <div class="form-group">
                                      <input type="text" class="form-control" placeholder="What do you need...">
                                  </div>
                                  <button type="submit" class="btn"><i class="fa fa-search"></i></button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      
          <div class="navigation">
              <nav class="navbar navbar-theme">
                  <div class="container">
                      <!-- Brand and toggle get grouped for better mobile display -->
                      <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                              aria-expanded="false">
                              <span class="sr-only">Menu</span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                          </button>
                      </div>
                      <div class="shop-category nav navbar-nav navbar-left">
                          <!-- Single button -->
                          <div class="btn-group">
                              <button type="button" class="btn btn-shop-category dropdown-toggle" data-toggle="dropdown"
                                  aria-haspopup="true" aria-expanded="false">
                                  Interior <span class="caret"></span>
                              </button>
                              <ul class="dropdown-menu">
                                  <li id="btn"><a href="/page/sell/wallpaper">Wallpaper</a></li>
                                  <li id="btn"><a href="/page/sell/floor">Floor</a></li>
                              </ul>
                          </div>
                      </div>
                      <div class="shop-category nav navbar-nav navbar-left">
                          <!-- Single button -->
                          <div class="btn-group">
                              <button type="button" class="btn btn-shop-category dropdown-toggle" data-toggle="dropdown"
                                  aria-haspopup="true" aria-expanded="false">
                                  Furniture <span class="caret"></span>
                              </button>
                              <ul class="dropdown-menu">
                                  <li id="btn"><a href="/page/sell/chair">Chair</a></li>
                                  <li id="btn"><a href="/page/sell/table">Table</a></li>
                                  <li id="btn"><a href="/page/sell/bed">Bed</a></li>
                                  <li id="btn"><a href="/page/sell/lamp">Lamp</a></li>
                              </ul>
                          </div>
                      </div>
                      <div class="shop-category nav navbar-nav navbar-left">
                          <!-- Single button -->
                          <div class="btn-group">
                              <button type="button" class="btn btn-shop-category dropdown-toggle" data-toggle="dropdown"
                                  aria-haspopup="true" aria-expanded="false">
                                  Place <span class="caret"></span>
                              </button>
                              <ul class="dropdown-menu">
                                  <li><a href="/page/introduce">Introduce</a></li>
                                  <li><a href="/page/contact">Contact us</a></li>
                              </ul>
                          </div>
                      </div>
                  </div><!-- /.container-fluid -->
              </nav>
          </div>
      
          <!--여기가 바뀌는 부분-->
          ${body}
      
      
          <div class="footer">
              <div class="container">
                  <div class="row">
                      <div class="col-md-3 col-sm-3">
                          <div class="single-widget">
                              <h2 class="widget-title">About Us</h2>
                              <div class="widget-inner">
                                  <p>Office: 460, Iksan-daero, Iksan-si, Jeollabuk-do, Republic of Korea</p>
                                  <p>Phone: (063) 850 5114</p>
                                  <p>Fax: (063)) 850 6666</p>
                                  <p>Email: place@wku.com</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-3 col-sm-3">
                          <div class="single-widget">
                              <h2 class="widget-title">Information</h2>
                              <div class="widget-inner">
                                  <ul>
                                      <li><a href="">Frequently Asked Question</a></li>
                                      <li><a href="">Terms and Condition</a></li>
                                      <li><a href="">Privacy Policy</a></li>
                                      <li><a href="">Customer Service</a></li>
                                      <li><a href="">Delivery Information</a></li>
                                      <li><a href="">Manufacturers</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-3 col-sm-3">
                          <div class="single-widget">
                              <h2 class="widget-title">Customer Care</h2>
                              <div class="widget-inner">
                                  <ul>
                                      <li><a href="">Contact Us</a></li>
                                      <li><a href="">Sitemap</a></li>
                                      <li><a href="">Gift Vouchers</a></li>
                                      <li><a href="">Live Chat 24x7</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-3 col-sm-3">
                          <div class="single-widget">
                              <h2 class="widget-title">Our Services</h2>
                              <div class="widget-inner">
                                  <ul>
                                      <li><a href="">Shipping & Returns</a></li>
                                      <li><a href="">Secure Shopping</a></li>
                                      <li><a href="">International Shipping</a></li>
                                      <li><a href="">Affiliates</a></li>
                                      <li><a href="">Contact</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      
          <!-- jQuery Library -->
      
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
      
          <!-- Latest compiled and minified JavaScript -->
      
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
      
          <!-- Script -->
      
          <script src="/js/script.js"></script>
      
      </body>
      
      </html>
      `;
    },
    
    SELL:function(title, product){
        return `
        
        <div class=" layout_padding promoted_sectipon">
            <div class="container product-container">
                <h1 class="promoted_text product_kind">${title}</h1>

                <!--제품 이미지들-->
                <div class="images_main">
                    <div class="row product-row">
                        ${product}

                    </div>
                </div>
            </div>
        </div>
        `;
    },
    
    list:function(title){
        let list = ``;
        let price = 0;
        let view = 0;
        let heart = 0;
        let i = 0;
        while(i <= 6){
            //대충 가격 및 뷰, 좋이요 값 생성
            price = Math.floor(Math.random()*(999-1)+1);
            view = Math.floor(Math.random()*(9999-1)+1);
            heart = Math.floor(Math.random()*(999-1)+1);

            list = list+
            `
            <div class="col-sm-6 col-md-6 col-lg-3 product">
                <div class="product_images"><img src="/images/${title}/${title}${i+1}.png" style="width: 100%;"></div>
                <div class="icons">
                    <i class="fa fa-eye"></i><span id="icon-detail">${view}</span>
                    <i class="fa fa-heart"></i><span id="icon-detail">${heart}</span>
                </div>
                <div class="product_detail">
                    <h3 class="product_title">${title}${i+1}</h3>
                    <h3 class="product_price">${price}만 원</h3>
                </div>
            </div>
        `
        i = i+1;
        }
        return list; 
    }

}
  