//生成20-100之间的20个随机数
function getSortList() {
	var arr_a = [];
	for (var i = 0; i < 20; i++) {
		arr_a.push(Math.floor(Math.random() * 1000));
	}
	return arr_a;
}

//冒泡排序
//交换相邻位置的元素，每次把最小元素换到最左边，每次范围加一。
function bubbleSort() {
	var a = getSortList(),
	l = a.length;
	document.write('冒泡前的：	' + a + '<br/>');
	if (l <= 1) {
		return true;
	}
	var min;
	for (var i = 0; i < l; i++) {
		min = a[i];
		for (var j = i; j < l; j++) {
			if (a[j] < min) {
				min = a[j];
				a[j] = a[i];
				a[i] = min;
			}
		}
	}
	document.write('冒泡排序：	' + a + '<br/><br/>');
}
bubbleSort();

//插入排序
//O(N^2) 	把第N个元素插入前N-1有序的数组中，从后往前扫描，不符合条件的元素往后移，符合条件就将第N个元素放入当前位置。
function insertSort(list) {
	var a = getSortList(),
	l = a.length,
	b = [];
	document.write('冒泡前的：	' + a + '<br/>');
	if (l <= 1) {
		return true;
	}
	for (var i = 0; i < l; i++) {
		b[i] = a[i];
		for (var j = l; j >= 0; j--) {
			var max = b[j];
			if (b[j - 1] && b[j - 1] > b[j]) {
				max = b[j - 1];
				b[j - 1] = b[j];
				b[j] = max;
			}
		}
	}
	document.write('插入排序：	' + b + '<br/><br/>');
}
insertSort(list)

//快速排序
//O(N*logN) （平均情况） 	找到一个参考元素，将比它小的元素放到其左边，比它大的元素放到其右边，参考元素就在最终的位置，再对左右进行排序。
function quickSort(list) {
	var a = [],
	b = [],
	l = list.length - 0,
	middle = l % 2 === 0 ? l / 2 : ((l - 1) / 2);
	if (l <= 2) {
		return list;
	}
	var left = 0,
	right = 0;
	for (var i = 0; i < l; i++) {
		if (i === middle) {
			continue;
		}
		if (list[middle] > list[i]) {
			a[left++] = list[i];
		} else {
			b[right++] = list[i];
		}
	}
	a[left++] = list[middle];
	return quickSort(a).concat(quickSort(b));
}
var list = getSortList();
document.write('冒泡前的：	' + list + '<br/>');
document.write('快速排序：	' + quickSort(list) + '<br/><br/>');

/**
 * 堆排序
 * @param items 数组
 * @return 排序后的数组
 */
function heapSort(items) {
	items = array2heap(items); //将数组转化为堆
	for (var i = items.length - 1; i >= 0; i--) {
		items = swap(items, 0, i); //将根和位置i的数据交换(用于将最大值放在最后面)
		items = moveDown(items, 0, i - 1); //数据交换后恢复堆的属性
	}
	return items;
}
/**
 * 将数组转换为堆
 * @param items 数组
 * @return 堆
 */
function array2heap(items) {
	for (var i = Math.ceil(items.length / 2) - 1; i >= 0; i--) {
		items = moveDown(items, i, items.length - 1); //转换为堆属性
	}
	console.log(items);
	return items;
}
/**
 * 转换为堆
 * @param items 数组
 * @param first 第一个元素
 * @param last 最后一个元素
 * @return 堆
 */
function moveDown(items, first, last) {
	var largest = 2 * first + 1;
	while (largest <= last) {
		if (largest < last && items[largest] < items[largest + 1]) {
			largest++;
		}
		if (items[first] < items[largest]) {
			items = swap(items, first, largest); // 交换数据
			first = largest; //往下移
			largest = 2 * first + 1;
		} else {
			largest = last + 1; //跳出循环
		}
	}
	console.log(items);
	return items;
}
/**
 * 交换数据
 * @param items 数组
 * @param index1 索引1
 * @param index2 索引2
 * @return 数据交换后的数组
 */
function swap(items, index1, index2) {
	var tmp = items[index1];
	items[index1] = items[index2];
	items[index2] = tmp;
	return items;
}
var a = [345, 44, 6, 454, 10, 154, 3, 12, 11, 4, 78, 9, 0, 47, 88, 9453, 4, 65, 1, 5];
document.write('排序前：'+a+'<br/>');
document.write('堆排序：'+heapSort(a)+'<br/><br/>');
 