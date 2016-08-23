<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMarketingCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('marketing_categories', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('marketing_id')->unsigned();
            $table->string('name');
            $table->string('icon');
            $table->boolean('active')->default(1)->index();
            $table->timestamps();

            $table->foreign('marketing_id')->references('id')->on('marketings');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('marketing_categories');
    }
}
