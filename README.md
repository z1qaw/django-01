# Описание API

## Получение аккаунтов.
Отправляем GET запрос на `/api/accounts/`  
Пагинация тут стандартная LimitOffset. Передаём параметры в limit и offset.  
  
Пример: 
`GET /api/accounts/?limit=100&offset=400`

Получаем ответ такого вида:
```
HTTP 200 OK
Allow: GET, POST, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "count": 5,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "AAss ass",
            "phone": "799977778788",
            "email": "fsofjsofijsd@fdsofjdsof.com",
            "create_time": "2021-09-01T06:36:29.943095Z"
        },
        {
            "id": 2,
            "name": "AAss ass",
            "phone": "799977778788",
            "email": "",
            "create_time": "2021-09-01T06:36:35.493231Z"
        },
        {
            "id": 3,
            "name": "AAss ass",
            "phone": "799977778788",
            "email": "gdgfsg34g5g54g",
            "create_time": "2021-09-01T06:36:41.978394Z"
        },
    ]
}
```

## Создание аккаунтов
Отправляем POST запрос на `/api/accounts/` с `Media type` `application/json` и таким телом:
```
{
    "name": "Ivan Ivanov",
    "phone": "79997777777",
    "email": "ass@ass.com"
}
```
Поле email необязательно, можно оставить как `"email": ""`  
Получаем ответ вида:  
```
HTTP 201 Created
Allow: GET, POST, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "id": 5,
    "name": "sdffds",
    "phone": "fdsfsd",
    "email": "",
    "create_time": "2021-09-01T06:44:58.758266Z"
}
```
Если есть ошибки, то такого вида:
```
HTTP 400 Bad Request
Allow: GET, POST, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "phone": [
        "This field may not be blank."
    ]
}
```

# Получить конкретный аккаунт по id
Отправляем GET запрос на `/api/accounts/1/`,
где 1 - это id.

Получаем ответ вида:
```
HTTP 200 OK
Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "id": 1,
    "name": "AAss ass",
    "phone": "799977778788",
    "email": "fsofjsofijsd@fdsofjdsof.com",
    "create_time": "2021-09-01T06:36:29.943095Z"
}
```

## Удаление аккаунта

Отправляем DELETE запрос на `/api/accounts/1/`, где 1 - это id аккаунта.

Получаем ответ вида:
```
HTTP 204 No Content
Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept
```

## Изменение аккаунта

Отправляем PUT запрос на `/api/accounts/1/`, где 1 - это id аккаунта с телом:
```
{
    "id": 2,
    "name": "AAss ass",
    "phone": "799977778788333",
    "email": "",
    "create_time": "2021-09-01T06:36:35.493231Z"
}
```

Получаем ответ вида:
```
HTTP 200 OK
Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "id": 2,
    "name": "AAss ass",
    "phone": "799977778788333",
    "email": "",
    "create_time": "2021-09-01T06:36:35.493231Z"
}
```