<div class="footer-container">
    <footer class="container-fluid">
        <div class="row">

            <div class="col-md-8 push-md-4 col-sm-9 col-sm-12 content">
                <div class="row">
                    @if(count($pages))
                        <div class="col-md-3 col-sm-3 col-xxs-6">
                            <h6>COMPANIA</h6>
                            <ul>
                                @foreach($pages as $page)
                                    <li>
                                        <a href="{{ route('show_page', ['slug' => $page->slug]) }}">{{ $page->title }}</a>
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                    <div class="col-md-3 col-sm-4 col-xxs-6">
                        <h6>{!!$meta->getMeta('services_title')!!}</h6>
                        <ul>
                            <li><a href="#">LP</a></li>
                            <li><a href="#">Site</a></li>
                            <li><a href="#">Marketing Kit</a></li>
                            <li><a href="#">FB Marketing</a></li>
                            <li><a href="#">Email Marketing</a></li>
                            <li><a href="#">Google Marketing</a></li>
                            <li><a href="#">Cont Vânzări</a></li>
                            <li><a href="#">Cont Marketing</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-sm-5  col-xxs-12">
                        <h6>{!!$meta->getMeta('e_book_title')!!}</h6>
                        <p>Instrument de calcul și analiză a rezultatelor activității Social Media Marketing.<br>
                            Ghid de resurse web pentru un design mai bun 5 scenarii de vânzări
                           </p>
                        <a href="/images/ico-user.jpg" class="btn btn-third" download>{!!$meta->getMeta('button_download')!!}</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 pull-md-8 col-sm-3 col-sm-12">
                <ul class="socials">
                @foreach($social as $socials)
                    <li><a href="{{$socials->link}}" target="_blank"><img src="{{$socials->icon}}"></a></li>
                    @endforeach
                </ul>
                <a href="#" class="logo2"></a>
            </div>
        </div>
        <p class="foot">{!!$meta->getMeta('reserved')!!}</p>
    </footer>
</div>
<!-- / .footer-container -->