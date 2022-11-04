## 数组

### 方法

#### 数组方法通用参数

- **参数** 
    - `callback`	                  - 为数组中每个元素执行的函数
        - `element`        -  数组中正在处理的当前元素
        - `index` （可选）      - 数组中正在处理的当前元素的索引
        - `array` （可选）      - 此数组方法正在操作的数组
    - `thisArg` （可选）        - 当执行回调函数 `callback` 时，用作 `this` 的值
        - 会被作为 callback 被调用时的 this 值。
        - 否则，callback 的 this 值在非严格模式下将是全局对象，严格模式下为 undefined

####  :gift_heart: template() 

> 

- **语法** 
- **参数**（[通用](#数组方法通用参数)）
    - `callback` 
        - `element` 
        - `index`（可选）
        - `array`（可选）
    - `thisArg`
- **返回值** 
- **示例** 



####  :gift_heart: every() 

> 测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值
>
> - 检测到有一个元素不满足，则整个表达式返回 *false* ，且剩余的元素不会再进行检测
> - 所有元素都满足条件，则返回 true

- **语法** 

    ```
    arr.every(callback(element[, index[, array]])[, thisArg])
    ```

- **参数**（[通用](#数组方法通用参数)）

    - `callback`
        - `element`
        - `index`（可选）
        - `array`（可选）
    - `thisArg`

- **返回值** 

    - 如果回调函数的每一次返回都为 truthy 值，返回 **true** 
    - 否则返回 **false** 

- **示例** 

    ```js
    const arr = [2, 4, 6]
    let result = arr.every(element =>element % 2 === 0)
    console.log(result) // => true
    
    let result2 = arr.every(element =>element % 2 !== 0)
    console.log(result2) // => false
    ```



####  :gift_heart: filter()​ 

> 创建一个新的数组，包含通过回调函数测试的所有元素

- **语法** 

    ```js
    var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
    ```

- **参数**（[通用](#数组方法通用参数)）

    - `callback`	         - 返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留
        - `element`
        - `index`（可选）
        - `array`（可选）
    - `thisArg`（可选）

- **返回值** 

    - 一个新的、由通过测试的元素组成的 <span style="color: #0099dd">数组</span> ，如果没有任何数组元素通过测试，则返回空数组

- **示例** 

    ```js
    const str = ['alice', 'bob', 'coco']
    let result = str.filter(str => str.length >= 5)
    console.log(result)     // => ['alice']
    ```



####  :gift_heart: forEach() 

> 对数组的每个元素执行一次回调函数

- **语法** 

    ```js
    arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
    ```

- **参数** （[通用](#数组方法通用参数)）

    - `callback`
        - `element`
        - `index`（可选）
        - `array`（可选）
    - `thisArg`

- **返回值** 

    - undefined

- **示例** 

    ```js
    const arr = [1, 3, 5]
    let result = arr.forEach(element => console.log(element))
    //      => 1
    //      => 3
    //      => 5
    console.log(result) // => undefined
    ```



#### :gift_heart: reduce() 

> 对数组中的每个元素按序执行一个由您提供的 **reducer** 函数
>
> - 每一次运行 **reducer** 会逐个遍历数组元素，每一步都将当前元素的值与上一步的计算结果相加
> - 第一次执行回调函数时，默认将数组索引为 0 的元素作为初始值 ，迭代器将从第二个元素开始执行（索引为 1 而不是 0）
> - 

- **语法** 

    ```js
    array.reduce(callback(previousValue, currentValue, currentIndex, array), initialValue)
    ```

- **参数** 

    - `callback` 					- 一个 “reducer” 函数
        - `previousValue`             - 上一次调用 `callback` 时的返回值。
        - `currentValue`               - 数组中正在处理的元素
        - `currentIndex`（可选）  - 数组中正在处理的元素的索引
        - `array`（可选）               - 用于遍历的数组
    - `initialValue`              - 第一次调用 callback 函数时参数 `previousValue` 的值
        - 若指定了初始值 `initialValue`，则 `currentValue` 则将使用数组第一个元素
        - 否则 `previousValue` 将使用数组第一个元素，而 `currentValue` 将使用数组第二个元素

- **返回值** 

    - 使用 “reducer” 回调函数遍历整个数组后的结果，即 <span style="color: #0099dd">执行完后 previousValue</span> 的值

- **示例** 

    ```js
    const arr = [1, 2, 3, 4, 5]
    // arr.reduce((累加的结果, 当前循环项) => {}, 0)
    let result = arr.reduce((preValSum, nowVal) => {
        return preValSum += nowVal
    }, 0)
    console.log(result)		// => 15
    
    const arr2 = [
        { name: '西瓜', state: true, price: 20, count: 1 },
        { name: '苹果', state: false, price: 5, count: 4 },
        { name: '香蕉', state: true, price: 8, count: 3 },
        { name: '番茄', state: true, price: 2, count: 5 },
    ]
    let result2 = arr2.filter(item => item.state).reduce(
    (totalPayment, currentValue) => {
        return totalPayment += currentValue.price * currentValue.count
    },0)
    console.log(result2);       // => 54    为西瓜、香蕉、番茄总价
    ```



#### :gift_heart: some() 

> 测试数组元素中是否有元素通过了被提供的函数测试，返回的是一个 Boolean 类型的值

- **语法** 

    ```js
    arr.some(callback(element[, index[, array]])[, thisArg])
    ```

- **参数**（[通用](#数组方法通用参数)）

    - `callback`
        - `element`
        - `index`（可选）
        - `array`（可选）
    - `thisArg`

- **返回值 ** 

    - 至少一个元素通过回调函数的测试就会返回**true** 
    - 所有元素都没有通过回调函数的测试返回值才会为 false
    - 如果用一个空数组进行测试，在任何情况下它返回的都是**false** 

- **示例** 

    ```js
    const arr = [1, 3, 5, 7, 9]
    // 检测条件：为偶数
    let result = arr.some(element => element % 2 === 0)
    console.log(result)     // => false
    ```



#### :gift_heart: sort() 

> 用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，按字母升序

- **语法**

    ```js
    arr.sort([compareFunction])
    ```

- **参数**

    - `compareFunction` （可选）	 - 指定按某种顺序进行排列的函数
        - `firstEl`                            - 第一个用于比较的元素
        - `secondEl`                          - 第二个用于比较的元素

    数组会按照调用该函数的返回值排序，即 a 和 b 是两个将要被比较的元素：

    - `compareFunction(a, b)` 小于 0 ，那么 a 会被排列到 b 之前
    - `compareFunction(a, b)` 等于 0 ， a 和 b 的相对位置不变
    - `compareFunction(a, b)` 大于 0 ， b 会被排列到 a 之前

- **返回值**

    - 排序后的 <span style="color: #0099dd">数组</span> 。请注意，数组已原地排序，并且不进行复制。

- **示例**

    - 要比较数字而非字符串，比较函数可以简单的以 a 减 b，如下的函数将会将数组升序排列

        ```js
        function compareNumbers(a, b) {
          return a - b;
        }
        ```



