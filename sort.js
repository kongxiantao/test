//����20-100֮���20�������
function getSortList() {
	var arr_a = [];
	for (var i = 0; i < 20; i++) {
		arr_a.push(Math.floor(Math.random() * 1000));
	}
	return arr_a;
}

//ð������
//��������λ�õ�Ԫ�أ�ÿ�ΰ���СԪ�ػ�������ߣ�ÿ�η�Χ��һ��
function bubbleSort() {
	var a = getSortList(),
	l = a.length;
	document.write('ð��ǰ�ģ�	' + a + '<br/>');
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
	document.write('ð������	' + a + '<br/><br/>');
}
bubbleSort();

//��������
//O(N^2) 	�ѵ�N��Ԫ�ز���ǰN-1����������У��Ӻ���ǰɨ�裬������������Ԫ�������ƣ����������ͽ���N��Ԫ�ط��뵱ǰλ�á�
function insertSort(list) {
	var a = getSortList(),
	l = a.length,
	b = [];
	document.write('ð��ǰ�ģ�	' + a + '<br/>');
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
	document.write('��������	' + b + '<br/><br/>');
}
insertSort(list)

//��������
//O(N*logN) ��ƽ������� 	�ҵ�һ���ο�Ԫ�أ�������С��Ԫ�طŵ�����ߣ��������Ԫ�طŵ����ұߣ��ο�Ԫ�ؾ������յ�λ�ã��ٶ����ҽ�������
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
document.write('ð��ǰ�ģ�	' + list + '<br/>');
document.write('��������	' + quickSort(list) + '<br/><br/>');

/**
 * ������
 * @param items ����
 * @return ����������
 */
function heapSort(items) {
	items = array2heap(items); //������ת��Ϊ��
	for (var i = items.length - 1; i >= 0; i--) {
		items = swap(items, 0, i); //������λ��i�����ݽ���(���ڽ����ֵ���������)
		items = moveDown(items, 0, i - 1); //���ݽ�����ָ��ѵ�����
	}
	return items;
}
/**
 * ������ת��Ϊ��
 * @param items ����
 * @return ��
 */
function array2heap(items) {
	for (var i = Math.ceil(items.length / 2) - 1; i >= 0; i--) {
		items = moveDown(items, i, items.length - 1); //ת��Ϊ������
	}
	console.log(items);
	return items;
}
/**
 * ת��Ϊ��
 * @param items ����
 * @param first ��һ��Ԫ��
 * @param last ���һ��Ԫ��
 * @return ��
 */
function moveDown(items, first, last) {
	var largest = 2 * first + 1;
	while (largest <= last) {
		if (largest < last && items[largest] < items[largest + 1]) {
			largest++;
		}
		if (items[first] < items[largest]) {
			items = swap(items, first, largest); // ��������
			first = largest; //������
			largest = 2 * first + 1;
		} else {
			largest = last + 1; //����ѭ��
		}
	}
	console.log(items);
	return items;
}
/**
 * ��������
 * @param items ����
 * @param index1 ����1
 * @param index2 ����2
 * @return ���ݽ����������
 */
function swap(items, index1, index2) {
	var tmp = items[index1];
	items[index1] = items[index2];
	items[index2] = tmp;
	return items;
}
var a = [345, 44, 6, 454, 10, 154, 3, 12, 11, 4, 78, 9, 0, 47, 88, 9453, 4, 65, 1, 5];
document.write('����ǰ��'+a+'<br/>');
document.write('������'+heapSort(a)+'<br/><br/>');
 