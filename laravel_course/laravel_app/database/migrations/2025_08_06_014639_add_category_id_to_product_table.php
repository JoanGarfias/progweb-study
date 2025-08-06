<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('product', function (Blueprint $table) {
            //Debe tener el mismo tipo de datos que los id (llaves primarias)
            $table->unsignedBigInteger("category_id")->nullable();
            $table->foreign("category_id")
                    ->references("id")->on("category")
                    ->onDelete("set null"); /* Qué se hace al eliminar un registro de category en el campo de llave foranea de product */
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('product', function (Blueprint $table) {
            $table->dropForeign(["category_id"]);
            $table->dropColumn("category_id");
        });
    }
};
