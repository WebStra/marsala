@extends('layout')

@section('content')
    <div class="main-container">
        <section class="info-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-10 col-xs-12 offset-xl-1">
                        <div class="row">
                        @foreach($offer as $ofert)
                            <div class="item col-lg-4 offset-lg-0 col-md-5 offset-md-1 col-sm-8 offset-sm-2 ">
                                <h3>
                                    <img src="{{$ofert->image}}" alt="img">
                                    {!!$ofert->title!!}
                                </h3>
                                {!!$ofert->body!!}
                            </div><!-- /.item -->
                        @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- / section.info-top -->

        @if(count($marketings))
            @include('partials.marketings')
        @endif

        <section class="slider">
            <div class="container-fluid">
                <h2 class="title">Web design &amp; identitate vizuală</h2>
                <h4 class="subtitle">Cum vom împacheta afacerea ta pentru ca tu să ai conversii și vânzări mai
                    mari?</h4>
            </div>
            <div class="wrap-carousel">
                <div class="monitor">
                    <span class="prev"></span>
                    <span class="next"></span>
                </div>
                <div id="carousel">
                @foreach($webdesign as $web)
                    <img src="{{$web->image}}"/>
                @endforeach
                </div>
            </div>
        </section>
        <!-- / section.slider -->

        <section class="consulting">
            <div class="container-fluid">
                <h2 class="title">Consultanță marketing în vînzări</h2>
                <h4 class="subtitle">Cum vom sistematiza, crește și controla Departamentul de Marketing și Vânzări</h4>
                <ul>
                @foreach($consultanta as $consult)
                    <li>
                        <div class="item">
                            <span class="wrap-ico"><i></i></span>
                            <p>{!!$consult->title!!}</p>
                        </div>
                    </li>
                @endforeach
                </ul>
                <h3>5 scenarii de vînzări pentru afacerea ta</h3>
                <a href="/images/ico-user.jpg" class="btn btn-second" download>Descarcă gratuit</a>
            </div><!-- /.container-fluid -->
        </section>
        <!-- / section.consulting -->


        <section class="strategies">
            <div class="container-fluid">
                <h2 class="title">5 strategii de top</h2>
                <h4 class="subtitle">Aplicăm 5 strategii de top pentru ca forma ta să se diferențieze de concurență și
                    să crești vânzările</h4>
                <div class="wrap-elements">
                    <ul class="center-block">
                        <li>Poziționare și strategie de dezvoltare</li>
                        <li>Promovare și atragere clienți sporite în vânzări</li>
                        <li>Prezență &amp; Conversie online</li>
                        <li>Vânzări</li>
                        <li>Vânzări repetate &amp; <br> Fidelizare</li>
                    </ul>
                    @foreach($strategies as $strategy)
                        <div class="item">
                            <i><img src="{{$strategy->icon}}"></i>
                            <h5>{!!$strategy->name!!}</h5>
                            {!!$strategy->body!!}
                        </div>
                    @endforeach
                </div>
            </div><!-- /.container-fluid -->
        </section>
        <!-- /section.stategies -->

        <section class="formular">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-7 offset-md-1 col-xs-12">
                        <h2 class="title">3e-book Gratuit</h2>
                        <ul class="items">
                            <li><i></i>promovare digitală &amp; statistici și analitică</li>
                            <li><i></i>web design &amp; identitate vizuală</li>
                            <li><i></i>consultanță marketng în vînzări</li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <div class="wrap-form">
                            <h4>Încearcă acum</h4>
                            <form action="" method="post">
                                <div class="form-group">
                                    <label for="name">Name:</label>
                                    <div class="wrap-input">
                                        <input type="text" name="name" id="name">
                                       <!--   <span class="valid active"></span> 
                                       <span class="error "></span> -->
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email:</label>
                                    <div class="wrap-input">
                                        <input type="email" name="email" id="email">
                                        <!-- <span class="valid"></span>
                                        <span class="error active"></span> -->
                                    </div>
                                </div>
                                {{csrf_field()}}
                                <div class="form-group">
                                    <button type="submit" class="downloadBook btn btn-second">Descarcă</button>
                                </div>
                                <i class="response"></i>
                            </form>
                        </div>
                    </div>
                </div>


            </div><!-- /.container-fluid -->
        </section>
        <!-- /section.formular -->

    </div> <!-- /.main-container -->

@endsection