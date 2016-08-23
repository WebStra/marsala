@extends('layout')

@section('content')
    <div class="main-container">
        <section class="info-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-10 col-xs-12 offset-xl-1">
                        <div class="row">
                            <div class="item col-lg-4 offset-lg-0 col-md-5 offset-md-1 col-sm-8 offset-sm-2 ">
                                <h3>
                                    <img src="/assets/images/ico/ico-stats.png" alt="img">
                                    Promovare digitală &amp; statistici și analitică
                                </h3>
                                Obtine mai multi clienti prin
                                Facebok Marketing,
                                Google Marketing și
                                Email Marketing
                            </div><!-- /.item -->
                            <div class="item col-lg-4 offset-md-0 col-md-5 col-sm-8 offset-sm-2 ">
                                <h3>
                                    <img src="/assets/images/ico/ico-blogging.png" alt="img">
                                    Web design &amp; identitate vizuală
                                </h3>
                                Inpacheteaza afacerea ta și ia conversii mai maria site-ului, lp-ului, mkit-ului tău
                            </div><!-- /.item -->
                            <div class="item col-lg-4 offset-lg-0 col-md-5 offset-md-3 col-sm-8 offset-sm-2">
                                <h3>
                                    <img src="/assets/images/ico/ico-money-talk.png" alt="img">
                                    Consultanță marketng în vînzări
                                </h3>
                                Sisteamatizeaza departamentul tau de marketing &amp; vinzari prin instrumente
                                performante care aduc vinzari
                            </div><!-- /.item -->
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
                    <li>
                        <div class="item">
                            <span class="wrap-ico"><i></i></span>
                            <p>CRM</p>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <span class="wrap-ico"><i></i></span>
                            <p>TELEFONIE</p>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <span class="wrap-ico"><i></i></span>
                            <p>SCENARII DE VÎNZĂRI &amp; CARTEA DE VÎNZĂRI</p>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <span class="wrap-ico"><i></i></span>
                            <p>RAPOARTE ȘI ANALIZĂ</p>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <span class="wrap-ico"><i></i></span>
                            <p>KPI VÎNZĂRI &amp; MARKETING</p>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <span class="wrap-ico"><i></i></span>
                            <p>AUDIT VÎNZĂRI &amp; MARKETING</p>
                        </div>
                    </li>
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
                            <form action="">
                                <div class="form-group">
                                    <label for="name">Name:</label>
                                    <div class="wrap-input">
                                        <input type="text" id="name">
                                        <span class="valid active"></span>
                                        <span class="error"></span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email:</label>
                                    <div class="wrap-input">
                                        <input type="email" id="email">
                                        <span class="valid active"></span>
                                        <span class="error"></span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-second">Descarcă</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div><!-- /.container-fluid -->
        </section>
        <!-- /section.formular -->

    </div> <!-- /.main-container -->
@endsection