# Eliminación Lógica en Laravel

Normalmente no se hace un borrado física de las bases de datos, sino que se hace un borrado lógico por cuestiones de que luego queremos hacer reportes historicos y si la información ya no está fisicamente entonces no podremos hacer correctamente un reporte.

En ese caso podemos configurar Laravel para usar borrado lógico.

Esto se logra agregando en las migraciones:

```php
$table->softDeletes();
```

> [!IMPORTANT]
> Esto genera una columna nueva llamada "deleted_at"

# Resultado:
```php
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes(); //Esto hace que trabajemos con borrado lógico
        });

    }
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
```


> [!IMPORTANT]
> Para que funcione hay que agregar el trait `SoftDeletes` en los modelos

# Agregando el trait `SoftDeletes` en los modelos

```php
use Illuminate\Database\Eloquent\SoftDeletes;
//codigo....

class User extends Authenticatable
{
    use SoftDeletes, HasFactory, Notifiable;
    //más código...
}
```