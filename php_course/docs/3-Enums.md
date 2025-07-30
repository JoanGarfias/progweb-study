# Cómo usar Enums en PHP

```php
enum ColorsEnum{
    case BLUE;
    case GREEN;
    case RED;
}
```

> [!NOTE]
> Generalmente en un Enum los casos son en mayusculas


# Utilizar el enum en una clase


```php
$task->setColor(ColorsEnum::BLUE);
```