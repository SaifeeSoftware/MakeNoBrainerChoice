var DealSliderTemplate =
    '   <div class="owl-item deals_item">  ' +
    '                                       <div class="deals_image">  ' +
    '                                           <a href="{page_link}" title="{title}"><img src="{main_img_src}" alt="{title}"></a>  ' +
    '                                       </div>  ' +
    '                                       <div class="deals_content">  ' +
    '                                           <div class="deals_info_line d-flex flex-row justify-content-start">  ' +
    '                                               <div class="deals_item_category"><a href="#">{cat}</a></div>  ' +
    '     ' +
    '                                           </div>  ' +
    '                                           <div class="deals_info_line d-flex flex-row justify-content-start">  ' +
    '                                               <a href="{page_link}" title="{title}">  ' +
    '                                                   <div class="deals_item_name">{title}</div>  ' +
    '                                               </a>  ' +
    '                                               <div class="deals_item_price ml-auto">₹ {price}</div>  ' +
    '                                           </div>  ' +
    '                                           <div class="available">  ' +
    '                                               <div class="available_line d-flex flex-row justify-content-start">  ' +
    '                                                   <div class="available_title">Available: <span>6</span></div>  ' +
    '                                                   <div class="sold_title ml-auto">Already sold: <span>28</span></div>  ' +
    '                                               </div>  ' +
    '                                               <div class="available_bar"><span style="width:17%"></span></div>  ' +
    '                                           </div>  ' +
    '                                           <div class="deals_timer d-flex flex-row align-items-center justify-content-start">  ' +
    '                                               <div class="deals_timer_title_container">  ' +
    '                                                   <div class="deals_timer_title">Hurry Up</div>  ' +
    '                                                   <div class="deals_timer_subtitle">Offer ends in:</div>  ' +
    '                                               </div>  ' +
    '                                               <div class="deals_timer_content ml-auto">  ' +
    '                                                   <div class="deals_timer_box clearfix" data-target-time="">  ' +
    '                                                       <div class="deals_timer_unit">  ' +
    '                                                           <div id="deals_timer1_hr" class="deals_timer_hr"></div>  ' +
    '                                                           <span>hours</span>  ' +
    '                                                       </div>  ' +
    '                                                       <div class="deals_timer_unit">  ' +
    '                                                           <div id="deals_timer1_min" class="deals_timer_min"></div>  ' +
    '                                                           <span>mins</span>  ' +
    '                                                       </div>  ' +
    '                                                       <div class="deals_timer_unit">  ' +
    '                                                           <div id="deals_timer1_sec" class="deals_timer_sec"></div>  ' +
    '                                                           <span>secs</span>  ' +
    '                                                       </div>  ' +
    '                                                   </div>  ' +
    '                                               </div>  ' +
    '                                           </div>  ' +
    '                                       </div>  ' +
    '                                  </div>  ';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var TopProductSliderTemplate = '   <div class="featured_slider_item">  ' +
    '                                           <div class="border_active"></div>  ' +
    '                                           <div class="product_item {product_mark} d-flex flex-column align-items-center justify-content-center text-center">  ' +
    '                                               <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="{main_img_src}" alt="{title}"></div>  ' +
    '                                               <div class="product_content">  ' +
    '                                                   <div class="product_price">₹ {price}</div>  ' +
    '                                                   <div class="product_name">  ' +
    '                                                       <div><a target="_blank" href="{page_link}" title="{title}">{title}</a></div>  ' +
    '                                                   </div>  ' +
    '                                                   <div class="product_extras">  ' +
    '     ' +
    '                                                       <a href="{page_link}" title="{title}"><button class="product_cart_button">Kyu lu</button></a>  ' +
    '                                                   </div>  ' +
    '                                               </div>  ' +
    '     ' +
    '                                               <ul class="product_marks">  ' +
    '                                                   <li class="product_mark product_discount">{discount}</li>  ' +
    '                                                   <li class="product_mark product_new">{age}</li>  ' +
    '                                               </ul>  ' +
    '                                           </div>  ' +
    '                                      </div>  ';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ProductSlider = '   <div class="owl-item">  ' +
    '                                   <div class="trends_item {product_mark}">  ' +
    '                                       <div class="trends_image d-flex flex-column align-items-center justify-content-center">  ' +
    '                                           <a href="{page_link}" title="{title}"><img src="{main_img_src}" alt="{title}"></a>  ' +
    '                                       </div>  ' +
    '                                       <div class="trends_content">  ' +
    '                                           <div class="trends_category"><a href="#">{cat}</a></div>  ' +
    '                                           <div class="trends_info clearfix">  ' +
    '                                               <div class="trends_name"><a href="{page_link}" title="{title}">{title}</a></div>  ' +
    '                                               <div class="trends_price">₹ {price}</div>  ' +
    '                                           </div>  ' +
    '                                       </div>  ' +
    '                                       <ul class="trends_marks">  ' +
    '                                           <li class="trends_mark trends_discount">{discount}</li>  ' +
    '                                           <li class="trends_mark trends_new">{age}</li>  ' +
    '                                       </ul>  ' +
    '                                   </div>  ' +
    '                              </div>  ';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ReviewSliderTemplate = '   <div class="owl-item">  ' +
    '                                   <div class="review d-flex flex-row align-items-start justify-content-start">  ' +
    '                                       <div>  ' +
    '                                           <div class="review_image"><img title="{title}" src="{main_img_src}" alt="{title}"></div>  ' +
    '                                       </div>  ' +
    '                                       <div class="review_content">  ' +
    '                                           <div class="review_name"><a href="{page_link}">{title}</a></div>  ' +
    '                                           <div class="review_text">  ' +
    '                                               <p>{short_desc}</p>  ' +
    '                                           </div>  ' +
    '                                       </div>  ' +
    '                                   </div>  ' +
    '                              </div>  ';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var BlogPostTemplate = '    <div class="blog_post">  ' +
    '                               <div class="blog_image"> <img src="{main_img_src}" alt="{title}"></div>  ' +
    '                               <div class="blog_text">{title}</div>  ' +
    '                               <div class="blog_button"><a href="{page_link}" title="{title}">Continue Reading</a></div>  ' +
    '                          </div>  ';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ProductGalleryTemplate = '    <div class="product_item {product_mark}">  ' +
    '                                       <div class="product_border"></div>  ' +
    '                                       <div class="product_image d-flex flex-column align-items-center justify-content-center"><a title="{title}" href="{page_link}" tabindex="0"><img src="{main_img_src}" alt="{title}"></a></div>  ' +
    '                                       <div class="product_content">  ' +
    '                                           <div class="product_price">₹ {price}</div>  ' +
    '                                           <div class="product_cat hide">{cat}</div>  ' +
    '                                           <div class="product_name">  ' +
    '                                               <div><a href="{page_link}" tabindex="0" title="{title}">{title}</a></div>  ' +
    '                                           </div>  ' +
    '                                       </div>  ' +
    '     ' +
    '                                       <ul class="product_marks">  ' +
    '                                           <li class="product_mark product_discount">{discount}</li>  ' +
    '                                           <li class="product_mark product_new">{age}</li>  ' +
    '                                       </ul>  ' +
    '                                  </div>  ';