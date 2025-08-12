```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Esto es necesario para usar las fábricas de Eloquent

class Product extends Model
{
    use HasFactory; //Esto es necesario para usar las fábricas de Eloquent
    protected $table = 'product';
    protected $fillable = [
        'name',
        'price',
        'description',
        'category_id',
    ];

    protected $hidden = [ //Con esto protegemos los datos
        "created_at",
        "updated_at",
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }
}
```