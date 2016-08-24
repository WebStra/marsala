<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStrategiesTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('strategies', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('icon', 225);
            $table->boolean('active')->default(1)->index();
            $table->timestamps();
        });

        Schema::create('strategy_translations', function(Blueprint $table)
        {
            $table->increments('id');

            $table->unsignedInteger('strategy_id');
            $table->unsignedInteger('language_id');

            $table->string('name', 255);
            $table->text('body');

            $table->unique(['strategy_id', 'language_id']);

            $table->foreign('strategy_id')->references('id')->on('strategies')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('language_id')->references('id')->on('languages')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('strategies');
        Schema::drop('strategy_translations');
    }
}
